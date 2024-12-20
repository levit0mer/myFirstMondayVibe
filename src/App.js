import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { Button, TextField, Dropdown } from "@vibe/core";
import "@vibe/core/tokens"; // Load CSS tokens

function App() {
  const preConfiguredList = [
    {
      name: "Create login page for the task manager",
      priority: "low"
    }, {
      name: "Learn about OAuth2.0 authentication",
      priority: "medium"
    }, {
      name: "Go to the GYM",
      priority: "medium"
    }, {
      name: "Add a DB for the task manager",
      priority: "high"
    }
  ]

  const [loading, setLoading] = useState(false);
  //  ! TODO: On production, remove the preconfigured list
  const [tasks, setTasks] = useState(preConfiguredList); // Task list
  const [taskInput, setTaskInput] = useState(""); // Task name input
  const [priority, setPriority] = useState(""); // Task priority
  const [filter, setFilter] = useState({ label: "All", value: "all" }); // Filter state

  const priorityOptions = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const dynamicFilterOptions = [
    { label: "All", value: "all" },
    ...tasks
      .map((task) => task.priority)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((priority) => ({
        label: priority.charAt(0).toUpperCase() + priority.slice(1),
        value: priority,
      })),
  ];

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() && priority) {
      setTasks([...tasks, { name: taskInput, priority: priority.value }]);
      setTaskInput(""); // Clear task name input
      setPriority(""); // Clear priority
    }
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) =>
    !filter || filter.value === "all" ? true : task.priority === filter.value
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h1>Your Simple Task Manager</h1>
        <ol>
          <li>Enter a task</li>
          <li>Choose the task priority</li>
          <li>Click `Add Task`</li>
        </ol>

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
          onChange={(value) => setPriority(value)}
          style={{ marginBottom: "10px" }}
        />

        {/* Button to add a new task */}
        <Button onClick={addTask} style={{ marginBottom: "20px" }}>
          Add Task
        </Button>

        {/* Filter dropdown */}
        <Dropdown
          options={dynamicFilterOptions}
          placeholder="Filter tasks"
          value={filter}
          onChange={(value) => setFilter(value || { label: "All", value: "all" })}
          style={{ marginBottom: "20px" }}
        />

        {/* Display the list of tasks */}
        <h2>Tasks</h2>
        {filteredTasks.length === 0 && <p>No tasks match the filter.</p>}
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              {task.name} - <strong>{task.priority}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;