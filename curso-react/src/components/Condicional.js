import { useState } from "react";

function Condicional(props){

  const [email, setEmail] = useState();
  const[userEmail, setUserEmail] = useState();

  function enviarEmail(e){
    e.preventDefault();
    
    setUserEmail(email);
  }

  function limparEmail(e){
    e.preventDefault();
    setUserEmail('');
  }

  return(
    <div>
      <h2>Cadastre o seu email:</h2>
      <form>
        <label htmlFor="email">E-mail: </label>
        <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar</button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é:  {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional;