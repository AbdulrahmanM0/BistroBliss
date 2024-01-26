import React from 'react'
import { Button } from 'reactstrap'

export default function MenuBar({title}) {
  return (
      <Button className='primary-button' outline>{title}</Button>
  )
}
