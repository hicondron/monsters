import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters: [
       {
         name: 'Frankenstein',
         id: '1'
       },
       {
         name: 'Zombie',
         id: '2'
       },
       {
         name: 'Banshee',
         id: '3'
       },
     ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users =>  this.setState({ monsters: users}));
    }
 
  render() {
  return (
    <div className="App">
      {
        this.state.monsters.map(monsters => <h1>{monsters.name}</h1>
        )}

    </div>
  );
}
}
export default App;
