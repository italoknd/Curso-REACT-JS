import './card.css'
import React from 'react'

export default function Card(props) {

  const cardStyle = {
    backgroundColor: props.color || '#00E',
    borderColor: props.color || '#00E', 
  }

  return (
    <div className="card" style={cardStyle}>
      <div className="title">{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  )
}
