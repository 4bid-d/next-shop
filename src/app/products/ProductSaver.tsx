"use client"
import { IProduct } from '@/src/services/ProductService'
import React from 'react'

function ProductSaver({products}:any ) {
  const retrived : string | null = localStorage.getItem("products")
  let savedProducts : IProduct []
  if(retrived){
      savedProducts = JSON.parse(retrived)
  }
  if(!retrived){
    localStorage.setItem("products", JSON.stringify(products))
  }
  return (
   <></>
  )
}

export default ProductSaver
