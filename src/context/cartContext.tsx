"use client"
import { useState ,createContext, ReactNode ,useContext} from 'react'
import { ICartProduct, IProduct } from '../services/ProductService'

export interface ICartContext{
  cart : ICartProduct[],
  restoreCart : (existingCart : ICartProduct[])=>void,
  incrementQuantity: (productId : number) => void;
  decrementQuantity: (productId : number) => void;
  popCart: (id: number) => void;
  pushToCart:(product :ICartProduct) => void;
  total : number;
}

export const  CartContext = createContext<ICartContext | undefined>(undefined)

export function CartProvider({children} : {children : ReactNode}){

  const [cart , setCart] = useState<ICartProduct[]>([])
  const [total , setTotal]= useState<number>(0)

  function pushToCart(product:ICartProduct){
    let productFound = false

    cart.forEach((prod:ICartProduct)=>{
        if(prod.id === product.id){
            prod.quantity++
            setTotal(total+ product.price)
            productFound = true
            return
        }
    })
    
    if(productFound) return
    let newProduct:ICartProduct = structuredClone(product)
    newProduct.quantity = 1
    setCart([...cart,newProduct])
    setTotal(total+product.price)
  }

  function popCart(id:number){
    let array= [...cart]

    let quantity : number = 0;
    let price :number = 0 ;
    let totalPrice : number;
    
    let fillteredArray = array.filter((product:ICartProduct)=>{
      if(product.id !== id){
        quantity = product.quantity
        price = product.price
      }
      return (product.id !== id)
    })
    totalPrice = quantity* price
    console.log("total :", total)
    console.log("total price to substract:", totalPrice)
    setTotal(total - totalPrice)
    setCart(fillteredArray)
  }

  function incrementQuantity(productId : number){
    console.log("increment called")
     cart.forEach((prod)=>{
        if(prod.id === productId){
            prod.quantity++
            setTotal(total + prod.price)
            setCart([...cart])
            return
          }
          
        })
  }

  function decrementQuantity(productId : number){
        
        cart.forEach((prod:ICartProduct)=>{
          
          if(prod.id === productId){
            if(prod.quantity === 1){
              setTotal(total - prod.price)
              popCart(productId)
              return
            }
            prod.quantity--
            setTotal(total-prod.price)
            setCart([...cart])
            return
        }
    })
  }

  function restoreCart(existingCart : ICartProduct[] ){
    setCart([...existingCart])
  }

  return(
    <CartContext.Provider value={{ cart, total , pushToCart , popCart ,
      incrementQuantity , decrementQuantity,restoreCart }}>
        {children}
      </CartContext.Provider>
  )
}

export function useCart() : ICartContext {
  const context : ICartContext | undefined = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}