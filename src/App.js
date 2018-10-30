import React, { Component } from 'react';
import './App.css';
import Comment from './comment.js';

const comment = {
  date: new Date(),
  text:'I hope you enjoy learning react!',
  author:{
      name:'Hello Kitty',
      avatarUrl:'https://placekitten.com/g/64/64'
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
       <Comment
       author = {comment.author}
       text = {comment.text}
        date={comment.date}
       />
      </div>
    );
  }
}

export default App;

