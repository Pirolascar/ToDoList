const initState = {
    list : [],
    loading : false
}


export default function(state = initState, action) {
    
    switch(action.type){
        case "LIST_TASKS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LIST_TASKS_SUCCESS":
            return {
                ...state,
                list: action.tasks,
                loading : false
            }
        case "CREATE_TASK_SUCCESS":
            return {
                ...state,
                list : [
                    ...state.list,
                    action.task],
                loading: false
            }
        case "DELETE_TASK_SUCCESS":
            return {
                ...state,
                list : state.list.filter(task => task._id != action.task._id)
            }
        case "FAILURE":
            return {
                ...state,
                loading : false
            }
        default:
            return state;
    }
}