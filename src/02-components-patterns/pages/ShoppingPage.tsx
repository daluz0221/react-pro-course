import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import '../styles/custom-styles.css'


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
            <ProductCard 
              product={product} 
              className="bg-dark text-white"
            >
              < ProductCard.Image className="custom-img" style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }} />
              <ProductCard.Title  className="text-bold"/>
              <ProductCard.Buttons className='custom-buttons' />
              
            </ProductCard>

          <ProductCard 
            product={product}
            className="bg-dark text-white"
            >
              < ProductImage className="custom-img" />
              <ProductTitle title={'café'} className="text-bold" />
              <ProductButtons className='custom-buttons' />
              
            </ProductCard>

            <ProductCard 
            product={product}
            style={{
              backgroundColor: '#70D1F8' 
            }}
            >
              < ProductImage style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
              }} />
              <ProductTitle title={'café'} style={{
                fontWeight: "bold"
              }} />
              <ProductButtons style={{
                display: 'flex',
                justifyContent: 'end'
              }} />
              
            </ProductCard>
            
        </div>
    </div>
  )
}
