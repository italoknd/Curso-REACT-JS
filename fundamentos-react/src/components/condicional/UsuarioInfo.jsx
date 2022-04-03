import React from 'react'
import If, { Else } from '../condicional/If'

export default function UsuarioInfo(props) {
  const usuario = props.usuario.nome || {}

  return (
    <div>
      {/* teste 1 */}
      <If test={usuario && props.usuario.nome}>
        <h4>Usuário</h4>
        <p>
          Seja bem vindo <strong>{usuario}</strong>
        </p>
      </If>

      {/* teste 2 */}
      <If test={usuario && props.usuario.email}>
        <h4>E-mail</h4>
        <Else>
          <p>
            Seja bem vindo <strong>{props.usuario.email}</strong>!
          </p>
        </Else>
      </If>

      {/* teste 3 */}
      <If test={!usuario && (!props.usuario.nome || !props.usuario.email)}>
        <h4>E-mail</h4>
        <Else>
          <p>
            Seja bem vindo <strong>Guest</strong>!
          </p>
        </Else>
      </If>
    </div>
  )
}
