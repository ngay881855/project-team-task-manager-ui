class Client {

  static host = process.env.REACT_APP_API_HOST;

  static fetchTasksInList(listId, onFulfilled, onRejected) {
    fetch(`${this.host}/lists/${listId}/tasks`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json()).then(onFulfilled).catch(onRejected);
  }

  static saveTask(listId, taskToSave, onFulfilled, onRejected) {
    fetch(`${this.host}/lists/${listId}/tasks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(taskToSave)
    }).then(res => res.json()).then(onFulfilled).catch(onRejected);
  }

  static updateTask(listId, index, updatedTask, onFulfilled, onRejected) {
    fetch(`${this.host}/lists/${listId}/tasks/${index}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedTask)
    }).then(res => res.json()).then(onFulfilled).catch(onRejected);
  }

  static deleteTask(listId, index, onFulfilled, onRejected) {
    fetch(`${this.host}/lists/${listId}/tasks/${index}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then(onFulfilled).catch(onRejected);
  }
}

export default Client