import React from 'react';
import "./style.css"


const InputSubmit = ({onSubmit}) => {
  return (
    <div><input type="submit" className='button'  onSubmit={onSubmit}/></div>
  )
}

export default InputSubmit