import { useState } from "react"
import { ProductInCart, Product } from "../interfaces/interfaces"
import { products } from "../data/productos"

export const useShoppingCart = () => {

    // Estoy creando un estado de tipo string el id y dentro de el, un objeto con el tipo de dato Product + ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [ key: string ] : ProductInCart }>({})

    const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
        // console.log("Onproducto", count, product);
        setShoppingCart( oldShoppingCart => {


            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0}

            if (Math.max( productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const {[product.id]: toDelete, ...rest} = oldShoppingCart
            return rest


            // if (count === 0) {
                
            //     const {[product.id]: toDelete, ...rest} = oldShoppingCart

            //     return rest
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, count}
            // }
        })

    }

    return {
        products,
        shoppingCart,
        onProductCountChange
    }
}