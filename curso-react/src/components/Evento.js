import Button from './componentes de evento/Button'

function Evento({ numero }) {
  function meuEvento() {
    console.log(`I've just been activated`)
  }

  function segundoEvento() {
    console.log(`Look! I've been activated again!`)
  }

  return (
    <div>
      <p>Clique para disparar o evento: </p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
      <br />
      <br />

      <button onClick={meuEvento}>Clique aqui</button>
    </div>
  )
}

export default Evento
