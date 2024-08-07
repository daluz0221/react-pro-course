import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCountChange = ({ count, product }:{count:number, product: Product}) => {
      // console.log("me llamaron", count, product);
      setShoppingCart( oldShoppingCart => {
  
        // Mi solución
        // if(count == 0){
        //   delete oldShoppingCart[ product.id ];
          
        //   return {
        //     ...oldShoppingCart
        //   }
        // }
  
        // Solución de fernando
        // if(count === 0) {
        //   // de esta forma obtengo el objeto a eliminar, puede ser útil tener esa info
  
        //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
  
  
        //   return rest
        // }
  
  
        // return {
        //   ...oldShoppingCart,
        //   [ product.id ]: { ...product, count }
        // }
  
        const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};
  
        if (Math.max(productInCart.count + count, 0) > 0) {
          productInCart.count += count;
          return {
            ...oldShoppingCart,
            [product.id]: productInCart
          }
        }
  
        // Borrar el producto
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest
  
      }); 


    }
    
    
    return {
      shoppingCart, 
      onProductCountChange
    }

  
}