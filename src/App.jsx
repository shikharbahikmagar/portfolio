import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import MainSec from './components/MainSec'
import LowerSec from './components/LowerSec'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* Navbar */}
    <Navbar/>

    {/* Main Section */}

    <Outlet />

    {/* Footer section */}
    <Footer />
      
    </>
  )
}

export default App
