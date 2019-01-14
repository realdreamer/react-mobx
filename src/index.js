import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';

// import App from './App';
// import BirdStore from './stores/BirdStore';
// ReactDOM.render(<Provider BirdStore={BirdStore}><App /></Provider>, document.getElementById('root'));

import TodoList from './TodoList';
// import store from './stores/TodoStore';
import store from './stores/TodoStoreWithoutDecorators';


ReactDOM.render(<Provider store={store}><TodoList /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
