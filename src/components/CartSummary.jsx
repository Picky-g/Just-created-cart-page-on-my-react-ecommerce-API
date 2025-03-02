import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const CartSummary = () => {
    const { cart } = useContext(cartContext)
    console.log('cart', cart);
    //  reducing method
    const totalQtyAmt = cart.reduce((total, item) => total + item.totalAmount, 0)
    // console.log(totalQtyAmt);
    const totalQty = cart.reduce((total, item) => total + item.quantity, 0)
    const totalShippingEst = 500
    const taxEst =800
    const totalDis =100
    const orderAmt = totalQtyAmt + totalShippingEst + taxEst - totalDis;


    return (
        <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>${totalQtyAmt}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total Quantity</p>
                        <p>{totalQty}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping estimate</p>
                        <p>{totalShippingEst}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Tax estimate</p>
                        <p>{taxEst}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total Discount</p>
                        <p className="text-red-600">{totalDis}</p>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>Order total</p>
                        <p>${orderAmt }</p>
                    </div>
                </div>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg mt-4 ">
                    Checkout
                </button>
                <p className="text-sm text-red-600 mt-2">Need to sign in to make checkout</p>
            </div>
        </div>
    )
}

export default CartSummary