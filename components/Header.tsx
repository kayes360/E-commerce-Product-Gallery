import React from 'react'
import ProductSearch from './ProductSearch'
import ProductCart from './ProductCart' 

export default function Header() {
  return (
    <div className="flex gap-2 justify-end m-5 ">
    <ProductSearch/>
    <ProductCart />
  </div>
  )
}
