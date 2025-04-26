import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../amazon/src/pages/Landing/Landing';
import Signup from '../amazon/src/pages/Auth/Signup'
import Payment from '../amazon/src/pages/Payment/Payment';
import Oredar from '../amazon/src/pages/Order/Oredar';
import Cart from '../amazon/src/pages/Cart/Carts';
import Result from '../amazon/src/pages/Result/Result'

export default function Routering() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Auth' element={<Signup />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path="/category/:catagoryname" element={<Result/>}/>
          <Route path='/Order' element={<Oredar />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
