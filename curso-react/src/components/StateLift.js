function StateLift({setUserName}){


  return(
    <div>
      <p>Informe o seu nome: </p>
      <label htmlFor="">Informe seu nome: </label>
      <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setUserName(e.target.value)}/>
    </div>
  )
}

export default StateLift;