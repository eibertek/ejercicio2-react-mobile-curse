import React from 'react';

export default props => {

  const attack = () => {
      const { idx, characters} = props;
      const chars = characters.map( (char, index) => {
        if(idx !== index && char.life>0 )
          char.getDamage(props.strong)
      });
      props.attackEvent(chars);
  };  

  const revivir = () => {
      const { idx, characters} = props;
      const chars = characters.map( (char, index) => {
        if(idx === index) {
            char.life = 2000;
        }
      });
      props.attackEvent(chars);
  }
  return  (
    <div>{props.name} {props.life}
    {props.life > 0 ? 
      <button onClick={attack} >Atacar</button>
      : <button onClick={revivir} >Revivir</button>
    }
    </div>
  );
}