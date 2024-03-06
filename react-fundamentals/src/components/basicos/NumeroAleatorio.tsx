import { INumeroAleatorio } from "../../interfaces/basicos-interface/numeroAleatorio.ts";
import { useState } from "react";

const NumeroAleatorio = ({ max_num, min_num }: INumeroAleatorio) => {
  const [numero_sorteado, set_numero_sorteado] = useState(0);
  const gerarNumeroRandomico: number = () => {
    set_numero_sorteado(
      Math.floor(Math.random() * (max_num - min_num + 1) + min_num)
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
