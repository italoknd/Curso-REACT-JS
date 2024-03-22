import { ReactElement, JSXElementConstructor } from "react";

export interface ITitulos {
  titulo: string;
  subtitulo: string;

  nota: number;
  aluno: string;
}

export interface IDadosUsuario {
  nome?: string;
  sobrenome?: string;
  idade?: string;
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface IAluno {
  id: number;
  nome: string;
  nota: number;
}
