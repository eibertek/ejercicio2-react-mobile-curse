import React, { Fragment, useState } from 'react';

export default (props) => {
  const [ name, setName ] = useState('asassqqq');
  
  const Button = props => {
    const [ name, setName ] = useState('nombre');
    return <button onClick={()=>setName('Alberto')}>CLick aqui {name}</button>;
  };
  
  if(props.hasName && props.hasName == false) return null;
  if(!!!props.hasName) return null;

  return <div>
    mi nombre es {props.name}  asass {name}
    <Button />
  </div>; 
}
