import React from 'react';
import logo from "../assets/img/logoPng.png"


const Footer = () => {
    return (
        <div className='bg-black  text-white px-[100px] flex w-full flex-col gap-3 py-[50px]'>
            <a href=""><img src={logo} alt="" /></a>
            <div className='flex justify-between'>
                <div className='w-[30%]'>

                    <p>NITEON is a B2B marketplace focused on connecting emerging African businesses to the globalized world economy.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className=' font-bold'>
                        About NITEON
                    </h1>
                    <a href="">Who we are</a>
                    <a href="">Become seller</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <p  className=' font-bold'>Useful Links</p>
                    <a href="">Privacy</a>
                    <a href="">Terms and Condition</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <p  className=' font-bold'>FAQs</p>
                    <a href="">For Buyer</a>
                    <a href="">For Seller</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <p  className=' font-bold'>Contact Us</p>
                    <a href="">care@niteon.co</a>
                    <a href="">+2348108035894</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
