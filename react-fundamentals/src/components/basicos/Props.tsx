import { ITitulos } from "../../interfaces/basicos-interface/basico";

const Props = ({ titulo, subtitulo }: ITitulos) => {
  return (
    <>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
    </>
  );
};

export default Props;
