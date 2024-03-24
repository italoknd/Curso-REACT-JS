import React from "react";
import dataAlunos from "../../data/alunos";
import { IAluno } from "../../interfaces/basicos-interface/basico";

const listaAlunos = (props) => {
  const alunos: IAluno[] = dataAlunos;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {alunos.map((aluno: IAluno, index) => {
              return (
                <td key={index}>
                  {aluno.id} {aluno.nome} {aluno.nota}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default listaAlunos;
