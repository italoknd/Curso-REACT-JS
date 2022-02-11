import Item from './Item'

function List() {
  const empresa = 'Xiaomi'

  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca={empresa} ano_lancamento={2021} />
        <Item />
      </ul>
    </>
  )
}

export default List
