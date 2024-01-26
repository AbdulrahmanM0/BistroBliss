import React from 'react'

export default function SectionHead2({title,description}) {
  return (
    <div className='first-header-component'>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>    
        </div>
    </div>
  )
}
