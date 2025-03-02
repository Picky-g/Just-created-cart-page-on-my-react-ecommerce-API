import React from 'react';
import { CiSearch } from "react-icons/ci";


const Search = () => {
    return (
        <>
            <div className='flex justify-center gap-3 py-3 px-6 border rounded border-gray-300'>

                <CiSearch className='mt-1 text-2xl text-gray-800' /><input type="search" className=' outline-none w-[400px]' placeholder='Search Products, Brands, Categories' />
            </div>
        </>
    );
}

export default Search;
