import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
     {
       'name':'John',
       'job':'Doctor'
     },
     {
      'name':'Jim',
      'job':'Lawyer'
    },
    {
      'name':'Elen',
      'job':'Designer'
    }

    ];
    return (
      <div className="App">
        <Table characterData = {characters} />
      </div>
    );
  }
}

export default App;
