import React from "react";
import Usuario from "./Usuario"

const ChildrenRender = () => {
    return (
        <div>
            <Usuario cond={false}>
                <h2>Condição verdadeira, renderizando conteúdo...</h2>
            </Usuario>
        </div>
    )
}

export default ChildrenRender