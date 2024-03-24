import React from "react"
import produtos from "../../data/produtos"
import { formaMonetaryValue } from "../../utils/formatMonetaryValue"
import "../repeticao/ListaProdutos.css"

const listaProdutos = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(produto => {
                            return (
                                <tr className="tdata" key={produto.id}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{formaMonetaryValue(Number(produto.valor))}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default listaProdutos