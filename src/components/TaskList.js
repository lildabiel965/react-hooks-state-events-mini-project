import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const handleDelete = (taskId) => {
    // Logic to delete the task will be implemented in App component
  }
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
