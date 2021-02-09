import tasksService from '../services/tasks.services';

export default {
    listTasks,
    createTask,
    deleteTask
}

function listTasks() {
    return dispatch => {
        dispatch({ type : 'LIST_TASKS_REQUEST'});
        tasksService.listTasks()
            .then(tasks => dispatch({ type : 'LIST_TASKS_SUCCESS', tasks}))
            .catch(error => dispatch({ type : 'FAILURE', error})
        )
    }
}

function createTask(newTaskContent) {
    return dispatch => {
        dispatch({ type : 'CREATE_TASK_REQUEST'});
        tasksService.createTask(newTaskContent)
            .then(task => dispatch({ type : 'CREATE_TASK_SUCCESS', task}))
            .catch(error => dispatch({ type : 'FAILURE', error})
        )
    }
}

function deleteTask(taskId) {
    return dispatch => {
        dispatch({ type : 'DELETE_TASK_REQUEST'});
        tasksService.deleteTask(taskId)
            .then(task => dispatch({ type : 'DELETE_TASK_SUCCESS', task}))
            .catch(error => dispatch({ type : 'FAILURE', error})
        )
    }
}

