import React from 'react';
import {connect} from 'react-redux';
import tasksActions from '../actions/tasks.actions';

export default 

@connect()
class TaskItem extends React.PureComponent {

    handleDelete(){
        const { dispatch, task } = this.props;
        dispatch(tasksActions.deleteTask(task._id));
    }

    render() {
        const { task } = this.props;
        return (
            <li className="task-item">
                <input type="checkbox"></input>
                <span className="task-content">
                    {task.content}
                </span>
                <button
                    onClick={this.handleDelete.bind(this)}>X
                </button>
            </li>
        )
    }
}