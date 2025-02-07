// "use client";
// import React, { useEffect, useState } from 'react'
// import { Food } from '../../../types/foods'
// import { getCartItems, updateCartQuantity } from '../actions/actions'
// import Swal from 'sweetalert2';
// import foods from '@/sanity/schemaTypes/foods';

// const Cartpage = () => {

// const [cartItems , setCartItems] = useState<Food[]>([])
// useEffect(() => {
//     setCartItems (getCartItems()) 
// },[])
// const handleRemove = (id:string) => {
//     Swal.fire({
//         title:"Are You Sure?",
//         text:"You will not be able to recover this item!",
//         icon:"warning",
//         showCancelButton:true,
//         confirmButtonColor:"#3085d6",
//         cancelButtonColor:"#d33",
//         confirmButtonText:"Yes, remove it!"
//     }).then((result) =>{
//         if(result.isConfirmed){
//             removeFromCart(id)
//             setCartItems(getCartItems())
//             Swal.fire("Removed!, Items has been removed.","Success..")
//         }
//     })
// }

// const handleQuantityChange = (id:string, )=>{
//  updateCartQuantity(id)
//  setCartItems(getCartItems())
// }
// const hadleIncrement = (id:string) =>{
//     const product = cartItems.find((item)=>item._id === id);
//     if (product)
//         handleQuantityChange(id)
// }
// const hadleDecrement = (id:string) =>{
//     const product = cartItems.find((item)=>item._id === id);
//     if (product  )
//         handleQuantityChange(id)
// }
//  const calculateTotal = () =>{
//     return cartItems.reduce((total, item) =>total + item.originalPrice  ,  0)
//  }
//  const handleProceed = () =>{
//     Swal.fire({
//         title:"Procced To Checkout",
//         text:"Please Review Your Cart Before Checkout",
//         icon:"question",
//         showCancelButton:true,
//         confirmButtonColor:"#3085d6",
//         cancelButtonColor:"#d33",
//         confirmButtonText:"Yes, proceed!"
//     }).then((result) =>{
//         if (result.isConfirmed){
//             Swal.fire("Sucess", "Your order has been suceesfully proceeded","success")
//             setCartItems([])
//         }
//     })
//  }

//   return (
//     <div>

//     </div>
//   )
// }

// export default Cartpage

// function removeFromCart(id: string) {
//     throw new Error('Function not implemented.');
// }
