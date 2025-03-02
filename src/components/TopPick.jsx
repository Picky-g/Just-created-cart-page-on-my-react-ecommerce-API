import React, { useContext, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import TopPickData from '../constantData/TopPickData'
import SideNav from './SideNav';
import { productContext } from '../context/ProductContext';
import Product from './Product';
import Pagination from './Pagination';


const TopPick = ({ img, title, price, offer }) => {
    const { products } = useContext(productContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const lastPostsIndex = currentPage * postsPerPage;
    const firstPostsIndex = lastPostsIndex - postsPerPage;
    const currentPosts = products.slice(firstPostsIndex, lastPostsIndex)


    return (
        <div className='px-[50px] mt-[50px] '>
            <div className='bg-gray-200 lg:px-[130px] py-[20px] flex flex-col gap-10'>
                <h1 className='text-4xl font-bold'>Top Picks for you</h1>
                <div className='lg:flex gap-2'>
                    <div className='lg:w-[20%] px-4'><SideNav /></div>
                    <div className='lg:w-[80%] md:flex flex-wrap  '>
                        {
                            currentPosts.map((product, i) => {
                                return (
                                    // <Product img={product.product_photo} title={product.product_title.substring(0, 40) + '...'} price={product.product_original_price} offer={product.product_num_offers} key={i} />
                                    
                                    <Product product={product} key={i}/>

                                )
                            })
                        }
                        <Pagination products={products.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPick;
