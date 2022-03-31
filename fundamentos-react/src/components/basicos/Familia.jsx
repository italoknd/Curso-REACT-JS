import React, { cloneElement } from 'react'

export default function Familia(props) {
  return (
    <div>
      {props.children.map((el, index) => {
        return cloneElement(el, {...props, key: index})
      })}
    </div>
  )
}
