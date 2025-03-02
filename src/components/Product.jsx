import React, { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const Product = ({product}) => {
    const {addToCart} = useContext(cartContext);


    let {asin, product_original_price,product_title, product_photo, product_num_offers} =  product;
    product_title = product_title.substring(0, 50)

    return (
        <>
            <div className='bg-white m-3 p-1 pb-7 lg:w-[22%] md:w-[45%] flex flex-col gap-1 rounded-lg'>
                <div className='h-[160px]'>
                    <img className='h-full w-full' src={product_photo} alt="" />
                </div>
                <p className='font-bold px-2 text-wrap overflow-hidden'>{product_title}</p>
                <p className='text-lg px-2 text-blue-700 font-bold'>{product_original_price}</p>
                <p className='text-sm px-2 text-red-700'>MQQ: {product_num_offers} pieces</p>
                <div onClick={()=>addToCart(asin)} className='flex justify-center bg-amber-500 py-3 rounded text-white font-bold cursor-pointer'>
                    <p>Add to Cart</p>
                    </div>
            </div>
        </>
    );
}

export default Product;
