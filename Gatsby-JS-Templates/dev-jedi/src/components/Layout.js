import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
                {/* content for each page goes into this div */}
                { children }
        </div>
        <footer>
            <p>Copyright 2023 Devs are Jedi</p>
        </footer>
    </div>
  )
}
