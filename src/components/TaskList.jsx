import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div className="tasklist">
      <table id="customers">
        <thead>
          <th>Sl No.</th>
          <th>Task</th>
          <th>Action</th>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td key={index}>{index + 1}</td>
              <td>{task}</td>
              <td>
                {" "}
                <button onClick={() => dispatch(deleteTask(index))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
