import React from 'react'
import {connect} from 'react-redux';
import tasksActions from '../actions/tasks.actions';
import TaskItem from './taskItem'
const ENTER_KEY = 'Enter'

export default
@connect (({ tasks: { list, loading }}) => ({tasks:list, loading}))
class App extends React.PureComponent {

  state = {
    newTaskContent : "",
    tasks : []
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(tasksActions.listTasks());
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { newTaskContent } = this.state;
    dispatch(tasksActions.createTask(newTaskContent));
    this.setState({newTaskContent : ''})
  }

  render() {
    const { newTaskContent } = this.state;
    const { tasks, loading } = this.props;
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
            {loading
              ? <span>Loading...</span>
              :<ul className="tasks-list">
                {tasks.map (task =>
                  <TaskItem key={`task_${task._id}`}  task = {task}/>
                )}
              </ul>
            }
        </div>
    );
  }
}