import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); 

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    sessionStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      const newTasks = [...tasks, taskInput];
      updateTasks(newTasks);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (task) => {
    const newTasks = tasks.filter((t) => t !== task);
    updateTasks(newTasks);
  };

  return (
    <React.Fragment>
    <div className="container pt-5">
      <div className='row'>
      <div className='col-md-6 offset-md-3'>
      <h1 className="mb-2 mt-0">To-Do List</h1>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)} required
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteTask(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave wave2"></div>
    </div>
    <div className='footer'>
      <div>Created by Meghanandan JB</div>
    </div>
  </React.Fragment>
  );
}

export default App;
