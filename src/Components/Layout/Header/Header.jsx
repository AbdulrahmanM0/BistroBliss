import React, { useEffect, useLayoutEffect, useState } from 'react'
import SocialBar from './HeaderSup/SocialBar'
import MainHeader from './HeaderSup/MainHeader'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState();

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);
  
  return (
    <>
      <div>
        <SocialBar windowWidth={windowWidth}/>
      </div>
      <div className='Header'>
        <MainHeader windowWidth={windowWidth}/>
      </div>
    </>
  )
}
