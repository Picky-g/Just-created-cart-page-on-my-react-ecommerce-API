import React from 'react';

const Pagination = ({products, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for (let i = 1 ; i <= Math.ceil(products/postsPerPage); i++) {
        pages.push(i);
        
    }
  return (
    <div className='flex justify-center w-full flex-wrap'>
        <button onClick={()=>setCurrentPage(currentPage-1)} className='px-3 py-1 bg-red-400 rounded text-white' >Prev</button>

      {
        pages.map((page, i)=>{
            return <button className={`dark:text-white text-black border border-gray-900 px-3 m-2 rounded font-bold hover:border-red-950 ${page == currentPage ? 'bg-red-950' : ''}`} key={i} 
            onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
        <button onClick={()=>setCurrentPage(currentPage+1)} className='px-3 py-1 bg-red-400 rounded text-white' >Next</button>

    </div>
  );
}

export default Pagination;
