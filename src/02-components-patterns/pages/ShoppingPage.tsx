
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products";




export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection:'row',
            flexWrap: 'wrap'
        }}>
            

          {
            products.map( product =>(
              <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark text-white"
                onChange={ onProductCountChange }
                // value={ shoppingCart[product.id]?.count ? shoppingCart[product.id].count : 0 } mi solución, funciona
                value={ shoppingCart[product.id]?.count || 0 } // solución de fernando
              >
                <ProductImage className="custom-img" />
                <ProductTitle className="text-bold" />
                <ProductButtons className='custom-buttons' />
                
              </ProductCard>
            ))
          }
          
            
        </div>

        <div className="shopping-cart">
          {
            Object.values(shoppingCart).map( product => (
              <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark text-white"
                style={{
                  width: '100px'
                }}
                value={ product.count }
                onChange={ onProductCountChange }
              >
                <ProductImage className="custom-img" />
                {/* <ProductTitle className="text-bold" /> */}
                <ProductButtons 
                  className='custom-buttons' 
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}  
                />
                
              </ProductCard>
            ))
          }
              
               
        </div>
    </div>
  )
}
