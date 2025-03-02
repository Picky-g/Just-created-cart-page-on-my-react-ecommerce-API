import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import {toast} from 'react-toastify'
 import AddCart from './pages/AddCart';


const App = () => {
  // toast('hello toast')
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<AddCart />} />

      </Routes>
      
    </>
  );
}

export default App;
