import React from 'react';
import { useParams } from "react-router-dom";

function Result () {
  let { name } : any = useParams();
  return (<p>{name}</p>)
}

export default Result