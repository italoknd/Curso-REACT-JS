import React from 'react'
import './card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div  className='card'>
      <div className='title'>{props.titulo}</div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}
