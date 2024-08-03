import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"




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
            <ProductCard product={product}>
              < ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
              
            </ProductCard>

          <ProductCard product={product}>
              < ProductImage />
              <ProductTitle title={'café'}  />
              <ProductButtons />
              
            </ProductCard>
            
        </div>
    </div>
  )
}
