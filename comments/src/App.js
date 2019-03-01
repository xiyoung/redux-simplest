import React, { Component } from 'react';
import './App.css';

import CommentInput from './container/CommentInput'
import CommentLists from './container/CommentLists'

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <CommentInput />
        <CommentLists />
      </div>
    );
  }
}

export default App;
