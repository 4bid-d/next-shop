import {  IProduct, ProductService } from "@/src/services/ProductService"
import "./product-details.css"
import Link from "next/link"
import AddToCart from "../../../../components/add-cart-button/AddToCart"



async function ProductDetails(props : any) {
  const  params  = await props.params
  const productId = params.productId
  let selectedProduct : IProduct | null = null

  if(productId){
    selectedProduct = await ProductService.getProductById(Number(productId))
  }
  if (selectedProduct == null){
    alert("Fetch failed")
    return ( <> Fetch failed</>)
  }

  return (
   <div>
      <Link href={"/products"}>
        <button className="back-button">Back</button>
      </Link>
      <div className="product-view-container">
          <div className="box ">
              <div className="product-image-title-div">
                <img className="product-image" src={selectedProduct.thumbnail} alt="" />
                <div className="product-details-title-desc">
                  <div className="product-details-title">
                    {selectedProduct.title}
                  </div>
                  <div className="product-details-description">
                    {selectedProduct.description}
                  </div>
                </div>
              </div>
            <AddToCart product={selectedProduct} />
          </div>
      </div>

   </div>
  )
}

export default ProductDetails
