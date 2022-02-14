function Evento({numero}){

  function meuEvento(){
    console.log(`I've just been activated ${numero}`)
  }

  return(
    <div>
      <p>Clique para disparar o evento: </p>
      <button onClick={meuEvento}>Clique aqui</button>
    </div>
  )
}

export default Evento;