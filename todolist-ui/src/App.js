import React from 'react'
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';
import TasksApp from './components/tasksApp.js'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <TasksApp/>
      </Provider>
    );
  }
}
