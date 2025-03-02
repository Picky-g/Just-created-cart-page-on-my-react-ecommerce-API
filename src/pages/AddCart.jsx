// 
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import CartSummary from '../components/CartSummary';
import CartProduct from '../components/CartProduct';
import { cartContext } from '../context/CartContext';

const AddCart = () => {
    const { cart, increaseQuantity, decreaseQuantity } = useContext(cartContext);

    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <CartProduct
                                    key={item.id}
                                    cartItem={item} 
                                    quantity={item.quantity}
                                    onIncrease={() => increaseQuantity(item.id)}
                                    onDecrease={() => decreaseQuantity(item.id)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-600">Your cart is empty.</p>
                        )}
                    </div>

                    <CartSummary cart={cart} />
                </div>
            </div>
        </Layout>
    );
};

export default AddCart;