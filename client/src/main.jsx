import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from "./pages/home/Home.jsx"
import Contact from './pages/contact/Contact.jsx'
import Service from './pages/Service/Service.jsx'
import Process from './pages/process/Process.jsx'
import Work from './pages/work/Work.jsx'
import About from './pages/about/About.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>}/>
    <Route path='Service' element={<Service/>}/>
    <Route path='Process' element={<Process/>}/>
    <Route path='Work' element={<Work/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Service/Contact' element={<Contact/>}/>
  
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
