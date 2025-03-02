
import { createContext, useContext, useState } from "react";
import React from 'react';
import { productContext } from "./ProductContext";
import { toast } from "react-toastify";

export const cartContext = createContext();

const CartContext = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const { products } = useContext(productContext);

    const addToCart = (id) => {
        let cartList;

        const product = products.find((item) => item.asin === id);
        if (!product) {
            toast.error("Product not found!", { position: "bottom-center" });
            return;
        }

        console.log("Product:", product);
        const price= product.product_price;
        const amount = price ? parseFloat(price.replace("$", "")) : 0;
        console.log("Amount:", amount);
        const exists = cart.find((item) => item.id === id);
        if (exists) {
           
            cartList = cart.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + 1;
                    const totalAmount = amount * newQuantity; 
                    return {
                        ...item,
                        quantity: newQuantity,
                        amount: amount, 
                        totalAmount: totalAmount, 
                    };
                } else {
                    return item;
                }
            });
        } else {
           
            const newCart = {
                id,
                product: {
                    asin: product.asin,
                    product_title: product.product_title,
                    product_description: product.product_description,
                    product_image: product.product_image,
                    product_price: product.product_price, 
                    brand: product.brand, 
                    category: product.category, 
                },
                quantity: 1,
                amount: amount, 
                totalAmount: amount,
            };
            cartList = [...cart, newCart];
        }

        console.log("Cart:", cartList);

        
        setCart(cartList);
        localStorage.setItem('cart', JSON.stringify(cartList));

        
        toast.success('Product added to your cart', { position: "bottom-center" });
    };


    const increaseQuantity = (id) => {
         
        const updatedCart = cart.map((item) =>{
            if (item.id === id ) {
                let totalAmt = (item.quantity + 1) * item.amount
                return{
                    ...item, quantity: item.quantity + 1, totalAmount: totalAmt
                }
            }else{
                return item
            }
        }
            
            // item.id === id ? { ...item, quantity: item.quantity + 1, amount: (item.quantity + 1) * item.amount } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    
    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>{
            if (item.id === id ) {
                let totalAmt = (item.quantity - 1) * item.amount
                return{
                    ...item, quantity: item.quantity - 1, totalAmount: totalAmt
                }
            }else{
                return item
            }
        }
            // item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    const removeCartProduct =(id)=>{
        console.log('id',id);
        
     const updatedCart =  cart.filter((item)=>item.id !== id)  
     setCart(updatedCart)
     localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    
    let cartLength = cart.length;

    return (
        <cartContext.Provider value={{ cart, cartLength, addToCart, increaseQuantity, decreaseQuantity, removeCartProduct }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContext;