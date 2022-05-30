import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductImage, ProductTitle, ProductButtons } from './index'

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children , product }:ProductCardProps) => {

    const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={styles.productCard}>

            <ProductImage img={product.img}/>

            <ProductTitle title={product.title}/>

            <ProductButtons />
        
        </div>
    </Provider>
  )
}

export default ProductCard