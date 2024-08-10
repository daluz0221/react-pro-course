
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import '../styles/custom-styles.css'
import { products } from "../data/products";

const product = products[0]


export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
              <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                  count: 6,
                  maxCount: 10
                }}
              >
                {
                  ( { reset, count, increaseBy, isMaxCountReach } ) => (
                    <>
                      <ProductImage className="custom-img" />
                      <ProductTitle className="text-bold" />
                      <ProductButtons className='custom-buttons' />
                      <button onClick={reset} >Reset</button>
                      <button onClick={ () => increaseBy(-2) }>-2</button>
                      {/* Si no se llega al is MAxCont, ocultar */}
                      {
                        !isMaxCountReach && <button onClick={ () => increaseBy(+2) }>+2</button>
                      }
                      
                      <span>count: { count }</span>

                    </>
                  )
                }
                
              </ProductCard>
    </div>
  )
}
