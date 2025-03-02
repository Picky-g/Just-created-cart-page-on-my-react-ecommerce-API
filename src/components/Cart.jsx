// 
import React, { useContext } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { cartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Cart = () => {
    const { cartLength } = useContext(cartContext);

    return (
        <>
            {/* Replace the span with Link */}
            <Link to="/cart" className='flex gap-1 justify-between text-gray-600 font-bold items-center' style={{ textDecoration: 'none' }}>
                <CiShoppingCart className='text-2xl' />
                <span className='text-gray-700 font-medium'>Cart</span>
                <span className='h-4 w-4 text-white font-bold -ml-1 -mt-5 text-xs bg-red-700 items-center flex justify-center rounded-full'>
                    {cartLength}
                </span>
            </Link>
        </>
    );
}

export default Cart;