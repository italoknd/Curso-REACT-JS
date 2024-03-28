import React from "react";

const Usuario = (props) => {
    return (
        <>
            {props.cond ? props.children : ""}
        </>
    )
}

export default Usuario