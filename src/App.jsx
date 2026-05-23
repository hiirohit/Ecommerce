import React from 'react'
import Products from "./components/products/Products"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import CheckOut from './components/checkout/CheckOut'
import PaymentConfirmation from "./components/checkout/PaymentConfirmation"
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './components/admin/dashboard/Dashboard'
import AdminProducts from './components/admin/products/AdminProducts'
import Category from './components/admin/categories/Category'
import Seller from './components/admin/sellers/Seller'
import Orders from './components/admin/orders/Orders'

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/order-confirm" element={<PaymentConfirmation />}/>
        </Route>
        <Route path='/' element={<PrivateRoute publicPage />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/' element={<PrivateRoute  adminOnly/>}>
          <Route path='/admin' element={<AdminLayout />} >
          <Route path='' element={<Dashboard />}/>
          <Route path='orders' element={<Orders />}/>  
          <Route path='products' element={<AdminProducts />}/>
          <Route path='sellers' element={<Seller />}/>  
          <Route path='categories' element={<Category />}/>    
          </Route>
          
        </Route>
        
      </Routes>
    </Router>
    <Toaster position='bottom-center'/>
    </React.Fragment>
  )
}

export default App