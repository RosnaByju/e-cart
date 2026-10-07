import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';


export default function View() {
  const {id}=useParams()
  console.log(id);
  
  
  const[product,setProduct]=useState({})
  console.log(product);
  const {allProducts}=useSelector(state=>state.productReducer)
 
  const Wishlist=useSelector(state=>state.wishlistReducer)
  console.log(Wishlist);

   const Cart=useSelector(state=>state.cartReducer)
   console.log(Cart);
   
  
 const dispatch=useDispatch() 

 const handleCart=()=>{
  const existingItem=Cart.find(item=>item.id==product.id)
  if(existingItem){
    alert("Product Already Existing")
  }else{
    dispatch(addToCart(product))
    alert("Product Added")
  }
 }

 const handleWishlist=()=>{
  const existingProduct=Wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("Product Already Existing")
  }
  else{
    dispatch(addToWishlist(product))
    alert("Product Added")
  }
 }
  
  
  
  useEffect(()=>{
setProduct(allProducts.find(item=>item.id==id))
  },[])
 
return (
  <div className="container mx-auto px-6 py-10">
<h1 className="mb-8 text-center text-3xl font-bold">
      View Product
    </h1>
<div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      <div className="flex w-full justify-center md:w-1/2">
        <img
          src={product?.thumbnail}
          alt=""
          className=" w-full  rounded-lg object-contain shadow-md"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-5 md:w-1/2">

        <h1 className="text-3xl font-bold">
          {product?.title}
        </h1>

        <Button onClick={handleWishlist}>
          Add TO Wishlist
        </Button>

        <Button onClick={handleCart}>
          Add to Cart
        </Button>

      </div>

    </div>

  </div>
)


}
