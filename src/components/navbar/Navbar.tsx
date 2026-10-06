"use client"
import React, { useRef } from 'react'
import "./navbar.css"
import Link from 'next/link'

function Navbar() {
  const LinkHolder = useRef<HTMLDivElement>(null)

  function toggleActive(e:React.MouseEvent<HTMLElement>){

    if(LinkHolder.current == null) return 

    Array.from(LinkHolder.current.children).forEach((elm)=>{
      elm.classList.remove("active")
    })

    e.currentTarget.classList.add("active")
  }
  
  return (
    <div className='navbar justify-start'>
        <Link className='title' href={"/"}>
          <div className='title-letter'>S</div>
          <div className='title-letter'>h</div>
          <div className='title-letter'>o</div>
          <div className='title-letter'>p</div>
          <div className='title-letter'>C</div>
          <div className='title-letter'>a</div>
          <div className='title-letter'>r</div>
          <div className='title-letter'>t</div>
        </Link>
        <div className='link-holder' ref={LinkHolder}>
          {/* <Link className='nav-link active' href={"/"} onClick={toggleActive}>Home</Link> */}
          <Link className='nav-link' href={"/products"} onClick={toggleActive}>Products</Link>
          <Link className='nav-link' href={"/about-us"} onClick={toggleActive} >About Us</Link>
          <Link className='nav-link' href={"/contact-us"} onClick={toggleActive}>Contact Us</Link>
          <Link className='nav-link' href={"/cart"} onClick={toggleActive}>Cart</Link>
        </div>
    </div>
  )
}

export default Navbar
