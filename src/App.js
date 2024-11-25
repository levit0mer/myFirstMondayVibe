import React, { useState } from "react";
import { Button, TextField, Dropdown } from "@vibe/core";
import "@vibe/core/tokens"; // Load CSS tokens

function App() {
  const [tasks, setTasks] = useState([]); // Task list
  const [taskInput, setTaskInput] = useState(""); // Task name input
  const [priority, setPriority] = useState(""); // Task priority

  const priorityOptions = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const addTask = () => {
    if (taskInput.trim() && priority) {
      setTasks([...tasks, { name: taskInput, priority }]);
      setTaskInput(""); // Clear task name input
      setPriority(""); // Clear priority
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Simple Task Manager</h1>

      {/* Input for task name */}
      <TextField
        placeholder="Enter a task name"
        value={taskInput}
        onChange={(value) => setTaskInput(value)}
        style={{ marginBottom: "10px" }}
      />

      {/* Dropdown for task priority */}
      <Dropdown
          options={priorityOptions}
          placeholder="Select priority"
          value={priority}
          onChange={(value) => setPriority(value)} // Updates the entire object
          style={{ marginBottom: "10px" }}
        />

      {/* Button to add a new task */}
      <Button onClick={addTask} style={{ marginBottom: "20px" }}>
        Add Task
      </Button>

      {/* Display the list of tasks */}
      <h2>Tasks</h2>
      {tasks.length === 0 && <p>No tasks added yet.</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - <strong>{task.priority.label}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
