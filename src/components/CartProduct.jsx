
import React, { useContext } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { cartContext } from '../context/CartContext';

const CartProduct = ({quantity, onIncrease, onDecrease, cartItem }) => {
const {id, product} = cartItem
    // console.log(product);
    
    const {removeCartProduct } = useContext(cartContext)
    return (
        <div className="flex relative flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mb-6"> 
        <button onClick={()=>removeCartProduct(id)} className='bg-red-100 text-red-700 cursor-pointer absolute top-5 right-5 w-7 h-7 rounded'>X</button>
            <div className="w-full md:w-1/3 bg-gray-200 rounded-lg flex items-center justify-center">
                {product.product_image ? (
                    <img
                        src={product.product_image} 
                        className="rounded-lg w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-gray-500">No Image Available</span>
                )}
            </div>

    
            <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{product.product_title}</h2>
                <p className="text-gray-600 mb-2">{product.product_description}</p>
                <div className="text-sm text-gray-500 mb-4">
                    <p><strong>Brand:</strong> {product.brand || "None"}</p>
                    <p><strong>Category:</strong> {product.category || "None"}</p>
                </div>

                
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold mb-2">${product.product_price}</p>
                    <button
                        onClick={onDecrease}
                        className="bg-gray-400 text-white rounded-full cursor-pointer size-8 text-center">-</button>
            
                    <span className="bg-gray-400 text-white rounded-full cursor-pointer size-8 text-center flex items-center justify-center">
                        {quantity}
                    </span>
                    <button
                        onClick={onIncrease}
                        className="bg-gray-400 text-white rounded-full cursor-pointer size-8 text-center">+</button>
                </div>

               
                <div className="flex items-center gap-2">
                    <CiCircleCheck className="text-green-600" />
                    <p className="text-green-600 mb-2">In Stock</p>
                </div>

                <p className="text-sm text-gray-600">
                    You are saving <span className="text-green-400">${product.savings || "0.00"}</span> upon purchase
                </p>
            </div>
        </div>
    );
};

export default CartProduct;