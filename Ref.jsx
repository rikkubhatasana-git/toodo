import React, { useState } from "react";

function TodoApp() {
  // state to hold the input value
  const [task, setTask] = useState("");
  // state to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // function to add task
  const addTask = () => {
    if (task.trim() !== "") { // prevent empty tasks
      setTasks([...tasks, task]); // add new task to array
      setTask(""); // clear input field
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>✅ Todo List</h2>
      
      {/* Input field */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "8px", width: "200px" }}
      />
      
      {/* Add Button */}
      <button 
        onClick={addTask} 
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Add
      </button>

      {/* Display tasks */}
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li 
            key={index} 
            style={{ 
              background: "#f4f4f4", 
              margin: "5px auto", 
              padding: "10px", 
              width: "250px", 
              borderRadius: "5px" 
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;