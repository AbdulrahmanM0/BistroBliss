import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { MenuInAction } from '../../../../../Store/Menu/Menu' 

export default function MenuBar({title}) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.Menu.type)
  console.log(state)

  return (
      <Button className='primary-button' onClick={()=>dispatch(MenuInAction(title))} outline>{title}</Button>
  )
}
