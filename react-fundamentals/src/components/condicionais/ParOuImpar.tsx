import React from "react";

const ParOuImpar = ({ numero }) => {
    return (
        <p>O Número {numero} é um número {numero % 2 === 0 ? "Par" : "Impar"}</p>
    )
}

export default ParOuImpar