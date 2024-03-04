import { ITitulos } from "../../interfaces/basicos-interface/basico";

const Props = (props: ITitulos) => {
  const { titulo, subtitulo, nota, aluno } = props;
  const condicao_aluno: string = nota >= 5 ? "Aprovado" : "Reprovado";

  return (
    <>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <hr />
      <p>
        <strong>Aluno: </strong>
        {aluno}
      </p>
      <p>
        <strong>Nota Final: </strong>
        {nota}
      </p>
      <p>
        <strong>Situação: </strong>
        {condicao_aluno}
      </p>
    </>
  );
};

export default Props;
