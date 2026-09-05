import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductsDetail from './components/product/ProductsDetail'
 
const App = () => {
  return (
    <div className='text-[32px]'>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/product/:id' element={<ProductsDetail/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
