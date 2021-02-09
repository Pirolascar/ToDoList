import React from 'react'
import tasksService from '../services/tasks.services';
import {connect} from 'react-redux';

const ENTER_KEY = 'Enter'

@connect (({ tasks: { list }}) => ({tasks:list}))

export default class App extends React.PureComponent {

  state = {
    newTaskContent : "",
    tasks : []
  }

  componentDidMount(){
    tasksService.listTasks()
      .then(tasks => this.setState({tasks}))
      .catch(console.error.bind(console))
  }

  handleSubmit = () => {
    const { tasks, newTaskContent } = this.state;
    tasksService.createTask(newTaskContent)
    .then(task =>
      this.setState({
        tasks: [
          ...tasks,
          task
        ],
        newTaskContent: ""
      }));
  }

  render() {
    const {tasks,newTaskContent} = this.state;
    return (
        <div className="tasks-root">
            <h1>Tasks</h1>
            <div className="tasks-header">
              <input type="checkbox"></input>
              <input type="text" placeholder="What needs to be done ?"
              value={newTaskContent}
              onChange={e => this.setState({
                newTaskContent: e.target.value})}
              onKeyUp={({ key }) =>
                key == ENTER_KEY && this.handleSubmit()}/>
            </div>
            <ul className="tasks-list">
              {tasks.map (task =>
              <li key={`task._id`} className="task-item">
                <input type="checkbox"></input>
                <span className="task-content">
                  {task.content}
                </span>
              </li>
              )}
            </ul>
        </div>
    );
  }
}