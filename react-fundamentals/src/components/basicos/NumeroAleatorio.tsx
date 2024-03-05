import { INumeroAleatorio } from "../../interfaces/basicos-interface/numeroAleatorio.ts";

const NumeroAleatorio = ({ max_num, min_num }: INumeroAleatorio) => {
  let numero_sorteado: number;
  const gerarNumeroRandomico: number = () => {
    numero_sorteado = Math.floor(
      Math.random() * max_num - Math.random() * min_num
    );
  };

  return (
    <>
      <p>Número máximo: {max_num}</p>
      <p>Número minimo: {min_num}</p>
      <p>Número sorteado: {numero_sorteado}</p>

      <button onClick={gerarNumeroRandomico}>Gerar Novo Número</button>
    </>
  );
};

export default NumeroAleatorio;
