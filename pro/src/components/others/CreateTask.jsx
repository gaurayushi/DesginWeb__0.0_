import React, { useState } from "react";

const CreateTask = ({ user, updateTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  // Function to create a new task
  const handleCreateTask = () => {
    if (!taskTitle || !taskDescription || !taskDate) {
      alert("Please fill all fields");
      return;
    }

    // New task structure
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category: "Development",
      status: "In Progress", // New tasks start as "In Progress"
    };

    // Get employees from localStorage
    let employees = JSON.parse(localStorage.getItem("employee")) || [];
    
    let updatedEmployees = employees.map(emp =>
      emp.email === user.email
        ? { ...emp, tasks: [...emp.tasks, newTask] } // Append new task
        : emp
    );

    // Save to localStorage
    localStorage.setItem("employee", JSON.stringify(updatedEmployees));

    // Update UI
    updateTasks([...user.tasks, newTask]);

    // Clear input fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 bg-gray-800 rounded-md mb-3"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full p-2 bg-gray-800 rounded-md mb-3"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <input
        type="date"
        className="w-full p-2 bg-gray-800 rounded-md mb-3"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button
        className="px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={handleCreateTask}
      >
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
