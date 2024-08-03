import React from 'react'
import { ProductCard } from '../components/ProductCard'



const product = {
    id: "1",
    title: 'coffe-mug - Card',
    img: './mug.png'
}




export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection:'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product}/>
            
        </div>
    </div>
  )
}
