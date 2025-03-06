import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import {toast} from 'react-toastify'
 import AddCart from './pages/AddCart';
import Login from './pages/Login';
import Account from './pages/Account';


const App = () => {
  // toast('hello toast')
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<AddCart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      
    </>
  );
}

export default App;
