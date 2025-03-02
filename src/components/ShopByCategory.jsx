import React from 'react';
import CategoryCardData from '../constantData/CategoryCardData'
import Category from './Category';

const ShopByCategory = ({title, desc,}) => {
    return (
        <div className='px-[50px]'>
            <div className='bg-gray-200 lg:px-[130px] py-[20px] flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>Shop By Category</h1>
                <div className='lg:flex gap-2'>
                    {
                        CategoryCardData.map((categoryCardData, i) => {
                            // console.log(categoryCardData);
                            
                            return (
                                <Category title={categoryCardData.title} desc={categoryCardData.desc} img1={categoryCardData.img1} img2={categoryCardData.img2} img3={categoryCardData.img3} img4={categoryCardData.img4} key={i}/>
                            )
                        })

                    }

                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;
