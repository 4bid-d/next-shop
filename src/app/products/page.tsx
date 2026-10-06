// import { useEffect, useState } from "react"
import {ProductService, IProduct} from "../../services/ProductService"
import "./products.css"
import ProductCard from "../../components/product-card/ProductCard"

async function Products() {
  let  products  = await ProductService.getProducts()
  
  return (
    <div className="container">
       {

          products.map((obj:IProduct)=>{
            return (<ProductCard key={obj.id} product={obj} />)
          })

       }
    </div>
  )
}

export default Products
