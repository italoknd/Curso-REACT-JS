import React from 'react'

export default function Passo(props) {
  return (
    <div className="input-area">
      <label htmlFor="">Passo:</label>
      <input type="number" 
        value={props.passo} 
        onChange={e => props.setPasso(+e.target.value)} />
    </div>
  )
}
