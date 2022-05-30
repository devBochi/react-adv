import { ProductCard, ProductButtons, ProductTitle, ProductImage } from '../components';

const product = {
  id: '1',
  title: 'Coffe Mug Ashe',
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
            <ProductCard.Title/>
            <ProductCard.Buttons />
          </ProductCard>
          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle/>
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage