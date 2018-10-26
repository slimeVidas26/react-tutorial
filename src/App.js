import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';

class App extends Component {
  render() {
    const characters = [
      {
     'name':'John',
     'job':'Lawyer'
      },
    {
      'name':' Ellen',
      'job':'Designer'
    },
    {
      'name':'Simon',
      'job':'Programmer'
    }
    ];
    return (
      <div className="App">
        <Table characterData = {characters}/>
      </div>
    );
  }
}

export default App;
//remove the table element and paste it to new file called Table.js
//create Table.js and open it
//replace the contain of body table using props
