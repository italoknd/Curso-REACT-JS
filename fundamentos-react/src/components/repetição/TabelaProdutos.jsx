import React from 'react'
import produtos from '../../data/produtos'

export default function TabelaProduto() {
  const listaProdutos = produtos.map(produtos => {
    return (
      <div key={produtos.id}>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">{produtos.id}</th>
              <td>{produtos.nome}</td>
              <td>{produtos.preco}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID:</th>
            <th scope="col">Nome:</th>
            <th scope="col">Preço:</th>
          </tr>
        </thead>
      </table>
      {listaProdutos}
    </div>
  )
}
