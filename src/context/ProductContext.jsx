import React, { Children, useEffect } from 'react';
import { useState } from 'react';
import { createContext, useContext } from "react";
import axios from 'axios';
export const productContext = createContext({})



const ProductContext = ({ children }) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
    useEffect(() => {
        const FetchProducts = async () => {

            const options = {
                method: 'GET',
                url: `${import.meta.env.VITE_BASE_URL}/products-by-category`,
                params: {
                    category_id: '2478868012',
                    page: '1',
                    country: 'US',
                    sort_by: 'RELEVANCE',
                    product_condition: 'ALL',
                    is_prime: 'false',
                    deals_and_discounts: 'NONE'
                },
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_BASE_KEY,
                    'x-rapidapi-host': import.meta.env.VITE_RAPID_HOST
                }
            };

            try {
                //  const response = await axios.request(options);
                //   const productsData = response.data.data.products;
                // setProducts(productsData)

                // localStorage.setItem('products', JSON.stringify(productsData))
            } catch (error) {
                console.error(error);
            }

        }

        FetchProducts()

    }, []);

    return (
        <productContext.Provider value={{ products }}>
            {children}
        </productContext.Provider>

    )
}

export default ProductContext;
