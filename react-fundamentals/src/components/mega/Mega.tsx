import React, { useState } from "react";
import { gerarNumeros } from "./gerarNumeros";

interface megaProps {
  qtd: number;
}

export default function Mega(props: megaProps) {
  const numerosIniciais: number[] = Array(props.qtd).fill(0);

  const [numeros, setNumeros] = useState(numerosIniciais);
  const [qtd, setQtd] = useState(props.qtd);

  return (
    <div>
      <h2>Mega</h2>
      <p>{numeros.join(" ")}</p>

      <div>
        <label>Quantidade de Números</label>
        <input
          type="number"
          value={qtd}
          onChange={(e) => setQtd(+e.target.value)}
        />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtd))}>
        Gerar Números
      </button>
    </div>
  );
}
