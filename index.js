import React, { Component } from 'react';
import { render } from 'react-dom';
import Character from './character/character.js';
import CharacterComponent from './character/CharacterComponent';

class App extends Component {
  constructor() {
    super();
    const characterList = [
      new Character({ 
      name: 'cachito', 
      strong: 200, 
      life: 2000,
      }), 
      new Character({ 
      name: 'javier', 
      strong: 200, 
      life: 2000,
      }), 
      new Character({ 
      name: 'pedro', 
      strong: 200, 
      life: 2000,
      }),       
    ];
      this.state = {
        name: 'React',
        characters: characterList,
    };
  }
  attackEvent = characterList => this.setState({ characterList });

  render() {
    const { characters } = this.state;
    return (
      <div>
      {characters && characters.map((character, idx) => <CharacterComponent 
            name={character.name}
            life={character.life}
            strong={character.strong}
            idx={idx}
            characters={characters}
            attackEvent={this.attackEvent}
            />)
      }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
