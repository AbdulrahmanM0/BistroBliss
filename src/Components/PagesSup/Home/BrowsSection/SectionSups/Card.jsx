import React from 'react'

export default function Card({cardIcon , cardTitle , cardBody , cardLink}) {
  return (
    <div className='brows-card rounded'>
        <div className='card-icon'>
            {cardIcon}
        </div>
        <div className='card-title'>
            <h4>{cardTitle}</h4>
        </div>
        <div className='card-body'>
            <p>
                {cardBody}
            </p>
        </div>
        <div className='card-link'>
            <a>{cardLink}</a>
        </div>
    </div>
  )
}
