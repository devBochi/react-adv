import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart }>({});

    const onProductCountChange = ({product, count}:{product: Product, count: number}) => {

    setShoppingCart( oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};
      // Sumar o restar cantidad
      if( Math.max(productInCart.count + count, 0) > 0 ){
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }
      // Borrar el producto - borrar en objeto a traves de destructuracion
      const {[product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest
    })}
    
    return {
        shoppingCart, 
        onProductCountChange
    }
}

// IMPLEMENTACION MAS FACIL 
// if (count === 0) {
//   delete oldShoppingCart[product.id] // tambien se puede usar destructuracion en el caso de usar un backup para deshacer el borrado
//   return {
//     ...oldShoppingCart
//   }
// }

// return {
//   ...oldShoppingCart,
//   [product.id]: {...product, count}
// }