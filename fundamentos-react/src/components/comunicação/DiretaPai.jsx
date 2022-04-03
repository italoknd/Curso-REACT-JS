import React from 'react'
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return(
    <div>
      <DiretaFilho 
        texto="Abaixo tem um número"
        numero={22}
        bool={true}
        >
      </DiretaFilho>
    </div>
  )
}