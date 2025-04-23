// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Book from './Book'
import New from './New'
import About from './About'
import France from './countries/France'
import Spain from './countries/Spain'
import Usa from './countries/Usa'
import India from './countries/India'
import Uk from './countries/Uk'
import Italy from './countries/Italy'



function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/details'element={<Signup/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/new' element={<New/>}></Route>
    <Route path='/book' element={<Book/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/france' element={<France/>}></Route>
    <Route path='/spain' element={<Spain/>}></Route>
    <Route path='/usa' element={<Usa/>}></Route>
    <Route path='/india' element={<India/>}></Route>
    <Route path='/uk' element={<Uk/>}></Route>
    <Route path='/italy' element={<Italy/>}></Route>
  

   </Routes>
   </BrowserRouter>
  )
}

export default App
