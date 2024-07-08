import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const AddTaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!taskText.trim()) return;
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;