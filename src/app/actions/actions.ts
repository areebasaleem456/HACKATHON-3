import { Food } from "../../../types/foods";

export const addToCart = (foods:Food) =>{
    const cart :Food[] =JSON.parse(localStorage.getItem("cart")|| "[]")
    const existingProductIndex = cart.findIndex(item => item._id=== foods._id)
    if (existingProductIndex > - 1){
        cart [existingProductIndex].available = true
    }
    else{
        cart.push({
            ...foods, available : false
        })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}
export const removFromCart = (productId:string) =>{
    let cart: Food[] =JSON.parse(localStorage.getItem("cart") || "[]")
    cart.filter(item =>item._id !== productId)
    localStorage.setItem("cart", JSON.stringify(cart))
}
export const updateCartQuantity = (productId:string, ) =>{
    const cart :Food[] = JSON.parse(localStorage.getItem("cart") || "[]")
    const productIndex = cart.findIndex (item => item._id === productId) 
    if(productIndex > - 1){
        cart[productIndex].available = true
    }
}

export const getCartItems= (): Food[] =>{
    return JSON.parse(localStorage.getItem("cart") || "[]")
}