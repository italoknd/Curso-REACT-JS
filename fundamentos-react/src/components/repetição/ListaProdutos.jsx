/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
  const precoTotal = produtos.reduce((ac, produtos) => {
    return (ac += produtos.preco)
  }, 0)

  const produtosLi = produtos.map(produto => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtosLi}

        <td>
          <strong>Total:</strong>
          {precoTotal}
        </td>
      </tbody>
    </table>
  )
}
