import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const home = (): void => navigate("/");
  const irParaCalculadora = (): void => navigate("/calculadora");

  return (
    <div className="">
      <button onClick={home}>Inicio</button>
      <button onClick={irParaCalculadora}>Acessar Calculadora</button>
    </div>
  );
}
