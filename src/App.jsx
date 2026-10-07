
import { Route,Routes, useRoutes } from 'react-router-dom'
import './App.css'
import Appbar from './Components/Appbar'
import Pagefooter from './Components/Pagefooter'
import Pagenotfound from './Pages/Pagenotfound'
import Whishlist from './Pages/Whishlist'
import Products from './Pages/Products'
import Home from './Pages/Home'
import { Footer } from 'flowbite-react'
import View from './Pages/View'
import Cart from './Pages/Cart'



function App() {
  return (
    <>

    <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/whishlist' element={<Whishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Pagefooter/>
    </>
  )
}

export default App
