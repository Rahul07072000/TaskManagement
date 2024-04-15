import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit} className="taskform">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="taskinput"
          placeholder="Add new task..."
        />
        <button type="submit" className="addTask-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
