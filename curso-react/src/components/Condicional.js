import { useState } from "react";

function Condicional(props){

  const [email, setEmail] = useState();
  const[userEmail, setUserEmail] = useState();

  function enviarEmail(e){
    e.preventDefault();
    
    setUserEmail(email);
  }

  return(
    <div>
      <h2>Cadastre o seu email:</h2>
      <form>
        <label htmlFor="email">E-mail: </label>
        <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar</button>
      </form>
    </div>
  )
}

export default Condicional;