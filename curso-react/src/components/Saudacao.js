function Saudacao ({userName}) {

  function gerarSaudacao(algumNome){

    return `Olá ${algumNome}, tudo bem?`
  }
  
  return(
    <div>
      {userName &&(
        <p>{gerarSaudacao(userName)}</p>
      )}
    </div>
  )
}

export default Saudacao;