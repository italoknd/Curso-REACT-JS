import React from 'react'
import './card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const style = {
    backgroundColor: props.color,
  }

  return (
    <div  className='card' style={style}>
      <div className='title'>{props.titulo}</div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}
