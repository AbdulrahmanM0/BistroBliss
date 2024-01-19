import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Navbar() {
  const [windowWidth , setWindowWidth] = useState()

  useLayoutEffect(()=>{
    setWindowWidth(window.innerWidth)
  },[])

  useEffect(()=>{

    window.addEventListener('resize',()=> setWindowWidth(window.innerWidth))


  },[])

  return (
    <>
    {
      windowWidth > 1000 &&
      <div className='navbar'>
      <nav>
          <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Menu</a></li>
              <li><a href='/'>Pages</a></li>
              <li><a href='/'>Contact</a></li>
          </ul>
      </nav>
  </div>
    }
    </>
  )
}
