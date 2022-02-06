import React from 'react'
import './card.css'

export default (props) => {
  return (
    <div>
      <div className='card'>Conteúdo</div>
      <div className='title'>{props.titulo}</div>
    </div>
  )
}
