import './card.css'
import React from 'react'

export default function Card({titulo}){
  return(
    <div className='card'>
      <div className='title'>{titulo}</div>
      <div className='content'>Conteúdo</div>
    </div>
  )
}