import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart }>({});

    const onProductCountChange = ({product, count}:{product: Product, count: number}) => {

        setShoppingCart( oldShoppingCart => {

            if (count === 0) {
                delete oldShoppingCart[product.id] // tambien se puede usar destructuracion en el caso de usar un backup para deshacer el borrado
                return {
                    ...oldShoppingCart
                }
            }      

            return {
            ...oldShoppingCart,
            [product.id]: {...product, count}
            }
            })
    }
    
    return {
        shoppingCart, 
        onProductCountChange
    }
}