import { useState } from 'react'

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()

    console.log(`Usuário: ${name}`);
    console.log(`Senha: ${password}`);
  }

  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
