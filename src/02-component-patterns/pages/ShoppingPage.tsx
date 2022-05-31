import { ProductCard, ProductButtons, ProductTitle, ProductImage } from '../components';
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
        ShoppingPage
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title title='Pedro'/>
            <ProductCard.Buttons />
          </ProductCard>
          <ProductCard 
            product={product}
            className='bg-dark'
          >
            <ProductImage className='custom-image'/>
            <ProductTitle className='text-white text-bold'/>
            <ProductButtons className='custom-buttons'/>
          </ProductCard>
          <ProductCard 
            product={product}
            className='bg-dark'
          >
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage