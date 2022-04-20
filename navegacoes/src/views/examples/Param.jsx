/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useParams } from "react-router-dom";

const Param = props =>{

  const {id} = useParams()

  return(
    <div className="Param">
      <h1>Param</h1>
      <p>valor: {id}</p>      
    </div>
  )
}

export default Param