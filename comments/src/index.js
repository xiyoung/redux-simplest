import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './comment.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import commentReducer from './reducers/comments'
import {Provider} from 'react-redux'

const commentStore = createStore(commentReducer);

ReactDOM.render(<Provider store={commentStore}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
