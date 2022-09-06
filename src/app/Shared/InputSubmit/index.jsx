import React from 'react';
import { useMediaQuery } from "react-responsive";
import "./style.css"


const InputSubmit = ({onSubmit}) => {

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div><input type="submit" className={isMediumScreen?'buttonSmall': 'button'}  onSubmit={onSubmit}/></div>
  )
}

export default InputSubmit