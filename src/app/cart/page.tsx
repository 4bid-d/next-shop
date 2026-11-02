"use client"
import { useCart } from '@/src/context/cartContext'
import ProductCard from "../../components/product-card/ProductCard"
import { ICartProduct, IProduct } from '@/src/services/ProductService'
import "../products/products.css"
import { useEffect } from 'react'

function page() {
  const {cart,restoreCart } = useCart()
    useEffect(()=>{
      let existingLocalStorageCartProducts : ICartProduct[]|[] = JSON.parse(localStorage.getItem("cart-products")|| "[]")
      if(existingLocalStorageCartProducts){
        restoreCart(existingLocalStorageCartProducts)
      }
    },[])
  return (
    <div className='container'>
       {
        cart.map((product:IProduct,key)=>{
          return(<ProductCard key={key} fromCartPage={true} product={product}/>)
        })
       }
    </div>
  )
}

export default page
