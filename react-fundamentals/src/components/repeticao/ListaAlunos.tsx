import React from "react";
import "./ListaAlunos.css";

import dataAlunos from "../../data/alunos";
import { IAluno } from "../../interfaces/basicos-interface/basico";

const listaAlunos = props => {
  const alunos: IAluno[] = dataAlunos;
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Nota</th>
        </tr>
        <tr className="tdata">
          {alunos.map((aluno: IAluno) => {
            return (
              <td>
                {aluno.id} {aluno.nome} {aluno.nota}
              </td>
            );
          })}
        </tr>
      </table>
    </>
  );
};

export default listaAlunos;
