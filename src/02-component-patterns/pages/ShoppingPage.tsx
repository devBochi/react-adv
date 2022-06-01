import { ProductCard, ProductButtons, ProductTitle, ProductImage } from '../components';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

  
  return (
    <div>
        ShoppingPage
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            products.map( (product) => {
              return (
                  <ProductCard
                  key={product.id} 
                  product={product}
                  className='bg-dark'
                  value={shoppingCart[product.id]?.count || 0}
                  onChange={onProductCountChange}
                  >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-white text-bold'/>
                    <ProductButtons className='custom-buttons'/>
                  </ProductCard>
                )  
              })
          }
        </div>
        <div className='shopping-cart'>
          {
            Object.entries(shoppingCart).map(([key, product])=> (
              <ProductCard
              key={key} 
              product={product}
              className='bg-dark text-white'
              style={{
                width: '100px'
              }}
              value={product.count}
              onChange={onProductCountChange}
              >
                    <ProductImage className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0,0,0,0)'}}/>
                    <ProductButtons 
                    className='custom-buttons'
                    style={{
                      display:'flex',
                      justifyContent:'center'
                    }}
                    />
                  </ProductCard>
            ))
          }
        </div>
    </div>
  )
}

export default ShoppingPage