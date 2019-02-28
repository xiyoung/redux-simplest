import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CommentInput from './container/CommentInput'
import CommentLists from './container/CommentLists'

class App extends Component {
  render() {
    return (
      <div>
        <CommentInput />
        <CommentLists />
      </div>
    );
  }
}

export default App;
