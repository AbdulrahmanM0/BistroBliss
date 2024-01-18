import React from 'react'
import SocialBar from './HeaderSup/SocialBar'
import MainHeader from './HeaderSup/MainHeader'

export default function Header() {
  return (
    <>
      <SocialBar />
    <div className='Header'>
      <MainHeader />
    </div>
    </>
  )
}
