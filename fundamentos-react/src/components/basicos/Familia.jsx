/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from 'react'

export default props => {
  return (
    <div>
      {/* <FamiliaMembro nome="Italo" sobrenome={props.sobrenome} idade={props.idade}/>
      <FamiliaMembro nome="Ana" sobrenome="Ferreira"/>
      <FamiliaMembro nome="Pedro" sobrenome="Ferreira"/>
      <FamiliaMembro {...props}/> */}
      {/* {props.children} */}

      {/* {React.cloneElement(props.children)} */}

      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i })
      })}
    </div>
  )
}
