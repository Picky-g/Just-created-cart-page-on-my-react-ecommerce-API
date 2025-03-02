import React from 'react';

const Category = (props) => {
    return (
        <>
            <div  className='bg-white p-3 lg:w-[33%] rounded-lg'>
                <div className='flex justify-between' >
                    <p className='font-bold'>{props.title}</p>
                    <a href="" className='border border-red-700 px-2 text-sm py-1 rounded-xl text-red-700 font-extralight'>View more</a>
                </div>
                <p>{props.desc}</p>
                <div className='flex flex-wrap'>
                    <img className='lg:w-[47%] h-[180px] border p-2 m-1 rounded border-gray-200' src={props.img1} alt="" />
                    <img className='lg:w-[47%] h-[180px] border p-2 m-1 rounded border-gray-200' src={props.img2} alt="" />
                    <img className='lg:w-[47%] h-[180px] border p-2 m-1 rounded border-gray-200' src={props.img3} alt="" />
                    <img className='lg:w-[47%] h-[180px] border p-2 m-1 rounded border-gray-200' src={props.img4} alt="" />
                </div>
            </div>
        </>
    );
}

export default Category;
