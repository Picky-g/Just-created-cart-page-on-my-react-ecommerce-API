import React from 'react';
import Cart from './Cart';
import Search from './Search';
import logo from "../assets/img/logoPng.png"
import { Link } from "react-router-dom";





const Header = () => {
    return (
        <div className='sticky top-0 bg-white flex justify-between py-3  my-2 p-[100px] items-center'>
           <Link to="/">
            <img src={logo} alt="Logo" className="h-auto w-[50%]" />
          </Link>
            <Search/>

            <div className='flex  justify-between gap-5  items-center'>

                <Cart/>

                <a href="" className='text-red-700 font-medium'>Login</a>
                <a href='' className='bg-red-600 px-5 rounded py-4 font-medium text-white'>Create Account</a>
            </div>

        </div>
    );
}

export default Header;
