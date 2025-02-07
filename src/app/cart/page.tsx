// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// import Image from "next/image";
// import { RiStarSFill } from "react-icons/ri";

// const Cart = () => {
//   let router = useRouter();

//   return (
//     <div className="text-black bg-white pb-20">
//       {/* header image */}
//       <div>
//         {/* First Section: Image and Breadcrumb */}
//         <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
//           <Image
//             src={"/cheekout.png"}
//             alt="Banner Image"
//             width={700}
//             height={400}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
//             <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">Cart</h2>
//             <div className="flex items-center space-x-2 text-black">
//               <a href="/" className="text-white">
//                 Home{" "}
//               </a>
//               <span className="text-white"> &gt; </span>
//               <a href="/about" className="text-orange-500">
//                 Cart
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product details */}
//       <div className="flex flex-col md:flex-row md:justify-between mt-12 px-4 md:px-32">
//         <h2 className="font-semibold text-xl md:ml-52">Product</h2>
//         <h2 className="font-semibold text-lg md:ml-60">Price</h2>
//         <h2 className="font-semibold text-lg md:ml-40">Quantity</h2>
//         <h2 className="font-semibold text-lg md:ml-48">Total</h2>
//         <h2 className="font-semibold text-lg md:ml-40">Remove</h2>
//       </div>

//       {/* Cart items */}
//       {[1, 2, 3, 4, 5].map((item, index) => (
//         <div key={index} className="flex flex-col md:flex-row mt-6 justify-between px-4 md:px-32">
//           <div className="flex flex-row">
//             <Image
//               src={`/product${item}.png`}
//               height={70}
//               width={70}
//               alt={`product${item}`}
//             />
//             <div className="flex flex-col">
//               <h2 className="font-medium pl-2 pt-2">Product {item}</h2>
//               <div className="flex flex-row pt-2 pl-2">
//                 <RiStarSFill size={20} className="text-yellow-600" />
//                 <RiStarSFill size={20} className="text-yellow-600" />
//                 <RiStarSFill size={20} className="text-yellow-600" />
//                 <RiStarSFill size={20} className="text-gray-700" />
//                 <RiStarSFill size={20} className="text-gray-700" />
//               </div>
//             </div>
//           </div>

//           <p className="text-gray-700 pt-6">$35.00</p>

//           <div className="pt-6">
//             <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
//               - 1 +
//             </div>
//           </div>

//           <p className="pt-6">$221.00</p>

//           <Image
//             className="mt-6 h-[20px] w-[20px]"
//             src={"/X.png"}
//             height={20}
//             width={20}
//             alt="x"
//           />
//         </div>
//       ))}

//       <hr className="mt-7" />

//       {/* Coupon code and Total bill */}
//       <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-32 mt-10">
//         {/* Coupon code */}
//         <div className="w-full md:w-[480px] border-2 border-gray-300 rounded-md p-4">
//           <h2 className="font-bold text-xl">Coupon Code</h2>
//           <div className="flex flex-col mt-5 text-gray-700">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <div className="flex flex-row mt-5">
//               <input
//                 className="border-gray-300 border-2 border-solid h-8 w-full md:w-96 pl-4"
//                 type="text"
//                 placeholder="Enter Here Code"
//               />
//               <div className="h-8 w-12 bg-orange-700 pt-1 text-center text-white cursor-pointer">
//                 Apply
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Total bill */}
//         <div className="w-full md:w-[500px] border-2 border-gray-300 rounded-md p-4 mt-5 md:mt-0">
//           <h2 className="font-bold text-xl ml-5">Total Bill</h2>
//           <div className="flex justify-between mt-5">
//             <h2 className="font-semibold">Cart Subtotal</h2>
//             <p className="font-semibold">$120.00</p>
//           </div>
//           <div className="flex justify-between mt-3">
//             <h2>Shipping Charge</h2>
//             <p>$00.00</p>
//           </div>
//           <hr className="mt-5" />
//           <div className="flex justify-between mt-5">
//             <h2 className="font-semibold">Total Amount</h2>
//             <p className="font-semibold">$205.00</p>
//           </div>

//           <div
//             onClick={() => router.push("/checkout")}
//             className="h-11 w-full md:w-[500px] bg-orange-700 border-2 border-solid border-orange-700 p-3 font-medium mt-5 text-center text-white cursor-pointer"
//           >
//             Proceed To Checkout
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

"use client";
import React, { useEffect, useState } from "react";
import { Food } from "../../../types/foods";
import { getCartItems, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string) => {
    updateCartQuantity(id);
    setCartItems(getCartItems());
  };

  const hadleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id);
  };

  const hadleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.originalPrice ,0
      
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed To Checkout",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully proceeded", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl">Your cart is empty!</div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <button
                  className="text-xl text-gray-600 hover:text-gray-800 mr-4"
                  onClick={() => handleRemove(item._id)}
                >
                  &#10005;
                </button>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.originalPrice} each</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 px-2 py-1 rounded-full"
                  onClick={() => hadleDecrement(item._id)}
                  disabled={item.available }
                >
                  -
                </button>
                <span className="text-lg">{item.available}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded-full"
                  onClick={() => hadleIncrement(item._id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 p-4 border-t">
            <h3 className="text-xl font-semibold">Total:</h3>
            <p className="text-2xl font-bold">${calculateTotal()}</p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleProceed}
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;

function removeFromCart(id: string) {
  // Assuming you will define this function for removing items from your cart in the backend or store
  console.log(`Removed item with id: ${id}`);
}


