import React from 'react'
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';
import TasksApp from './components/tasksApp.js'

const store = createStore(rootReducer);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <TasksApp/>
      </Provider>
    );
  }
}
