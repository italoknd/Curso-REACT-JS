import React from 'react'
import produtos from '../../data/produtos'

export default function TabelaProduto() {
  const listaProdutos = produtos.map(produto => {
    return (
      <div key={produto.id}>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">{produto.id}</th>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
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
