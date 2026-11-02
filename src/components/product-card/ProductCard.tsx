"use client"
import "./product-card.css"
import { IProduct , ICartProduct } from './../../services/ProductService';
import Link from "next/link";
import { ICartContext, useCart } from "@/src/context/cartContext";

interface IProductCardProps{
  product : IProduct 
  fromCartPage : boolean
}

function ProductCard(props:IProductCardProps ) {
  const productObj : IProduct | ICartProduct = props.product
  const fromCartPage : boolean = props.fromCartPage
  const { decrementQuantity , incrementQuantity ,popCart } : ICartContext = useCart()

  const inc_cart = () => incrementQuantity(productObj.id)
  const dec_cart = () => decrementQuantity(productObj.id)
  const rem_cart= () => {
    popCart(productObj.id)
  }
  return (
    <div className="product-card">
        <div className="product-image-div">
           <img className="product-image" src={productObj.thumbnail} alt="" />
        </div>
        <div className="card-content">  
            <div className="card-title">
                {productObj.title}
            </div>
            <div className="product-price">
              {`RS: ${  productObj.price*80}`}
            </div>
           { !fromCartPage && <Link href={`/products/details/${productObj.id}`}>
              <button className="view-details-btn" >View Details</button>
            </Link>}
            {fromCartPage && 
              <div className="cart-div">
                <div className="quantity-div">
                  <button className="decrement-cart-btn quantity-btn" onClick={dec_cart}>-</button>
                  <div className="quantity-display">{productObj.quantity}</div>
                  <button className="increment-cart-btn quantity-btn" onClick={inc_cart} >+</button>
                </div>
                <button className="remove-cart-btn cart-btn" onClick={rem_cart}>Remove From Cart</button>
              </div>
            }
        </div>
    </div>
  )
}

export default ProductCard
