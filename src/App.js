import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';

class App extends Component {

  state = {
   characters : [
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
   ]
  }

  removeCharacter = (index)=>{
   
    const {characters} = this.state;
    //console.log(characters)
    this.setState({
      characters:characters.filter((character,i)=>{
        return i!==index;
      })
    })
  }
  render() {
    const {characters} = this.state;
      
    
    return (
      <div className="container">
        <Table
         characterData = {characters}
         removeCharacter = {this.removeCharacter}
         />
      </div>
    );
  }
}

export default App;
//remove the table element and paste it to new file called Table.js
//create Table.js and open it
//replace the contain of body table using props
