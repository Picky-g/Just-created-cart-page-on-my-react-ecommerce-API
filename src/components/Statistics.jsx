import React from 'react';
import SellerData from '../constantData/SellerData'
import CategoriesData from '../constantData/CategoriesData'

const Statistics = () => {
    return (
        <div className='px-[80px] lg:px-[180px] flex py-[50px] '>

            <div className='lg:flex '>
                <div className='lg:w-[60%]'>
                    <h1 className='text-4xl font-medium'><span className='text-red-700'>Discover nicely </span>crafted and curated <br /> products tailored for all your needs.</h1>
                    <div className='flex items-center gap-2 flex-wrap py-4'>
                        {

                            CategoriesData.map((categories, i) => {
                                return (

                                    <div key={i} className='flex gap-2 flex-col justify-center border border-gray-300 px-8 py-2 items-center rounded text-2xl'>
                                        {categories.icon}
                                        <p className='font-extralight text-sm'>{categories.paragraph}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='flex lg:w-[40%] gap-3 flex-wrap'>
                    {SellerData.map((sellerData, i) => {

                        return (
                            <span className='flex gap-1' key={i}>
                                <span className=' flex justify-center items-center border rounded-full h-20 w-20 text-center text-3xl text-red-700'>
                                    {sellerData.icon}
                                </span>
                                <span className='flex flex-col h-20 w-30'>
                                    <h1 className='text-2xl'>{sellerData.number}</h1>
                                    <p className='font-extralight'>{sellerData.paragraph}</p>
                                </span>
                            </span>

                        )
                    })

                    }


                </div>
            </div>
        </div>
    );
}

export default Statistics;
