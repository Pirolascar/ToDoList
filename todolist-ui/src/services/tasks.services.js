const API_URL = "http://localhost:3000";

export default {
    listTasks,
    createTask
}

function apiFetch(path, options){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return fetch(`${API_URL}${path}`, {
        headers,
        ...options})
        .then(response => response.json())
        .catch(console.error.bind(console));
}
function listTasks() {
    return apiFetch("/tasks");
}

function createTask(content){
    return apiFetch("/tasks", {
        method: 'POST',
        body: JSON.stringify({
            content
        })
    });
}