
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
                <ProductImage className="custom-img" />
                <ProductTitle className="text-bold" />
                <ProductButtons className='custom-buttons' />
              </ProductCard>
    </div>
  )
}
