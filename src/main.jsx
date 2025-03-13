import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{Routes,Route} from'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx'
import Contacts from './pages/Contacts.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import About from './pages/About.jsx'
import Collection from './pages/Collection.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/navbar.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/orders' element={<Orders/>}/>
  <Route path='/placeorders' element={<PlaceOrder/>}/>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/cart' element={<Cart/>}/>
  



      </Routes>
    </div>

  </BrowserRouter>,
)
