import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'mobx-react';
import BirdStore from './stores/BirdStore';

// import TodoList from './TodoList';
// import TodoStore from './stores/TodoStore';

ReactDOM.render(<Provider BirdStore={BirdStore}><App /></Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider TodoStore={TodoStore}><TodoList /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
