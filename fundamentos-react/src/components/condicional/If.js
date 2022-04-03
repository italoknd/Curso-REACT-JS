// eslint-disable-next-line import/no-anonymous-default-export
export default function If(props) {

  const elseChild = props.children.filter(child =>{
    return child.type && child.type.name === "Else"
  })[0]

  const ifChildren = props.children.filter(child =>{
    return child !== elseChild
  })

  if (props.test) {
    return elseChild ? elseChild === 'Else' : ifChildren
  } else {
    return false
  }
}

//componente else
export const Else = props => props.children