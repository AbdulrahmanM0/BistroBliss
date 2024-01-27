import React from 'react'
import MenuBar from './SectionSupes/MenuBar'
import { Col, Row } from 'reactstrap'

export default function MenuSection() {

    const menuBar = [
        {
            title: 'All'
        },
        {
            title: 'Breakfast'
        },
        {
            title: 'Main Dishes'
        },
        {
            title: 'Drinks'
        },
        {
            title: 'Desserts'
        },
    ]

  return (
    <section>
        <div className='menu-bar'>
            {menuBar.map((item,key)=>(
                <MenuBar title={item.title} key={key} />
            ))}
        </div>
    </section>
  )
}
