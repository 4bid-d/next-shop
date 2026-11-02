"use client"
import { ICartProduct } from "@/src/services/ProductService"
import {useCart} from "../../context/cartContext"

function AddToCart(props:any) {
  const product  =  props.product
  const {pushToCart}:any = useCart()
  function addToCart(){
      let existingLocalStorageCartProducts : ICartProduct[]|[] = JSON.parse(localStorage.getItem("cart-products")|| "[]")
     
      if (!product.quantity) product.quantity = 1 

      pushToCart(product)
      
      localStorage.setItem("cart-products",JSON.stringify([...existingLocalStorageCartProducts, product]))


  }
  return (
    <div>
          <button onClick={()=>{
              addToCart()
          }} className="add-cart-button">Add To Cart</button>
    </div>
  )
}

export default AddToCart
