import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='flex flex-col gap-6 '>
      <h1 className='text-lg'>Category</h1>
      <ul>
        <li><Link to='/all-products'>All</Link></li>
        <li><Link to='/'>Visual Art</Link></li>
        <li><Link to='/'>Raw Food and Health</Link></li>
        <li><Link to='/'>Commodities</Link></li>
        <li><Link to='/'>Fashion and Beauty</Link></li>
        
      </ul>
    </div>
  );
}

export default SideNav;
