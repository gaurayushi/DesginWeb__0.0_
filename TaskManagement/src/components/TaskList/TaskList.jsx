import React, { useEffect, useState } from "react";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data?.tasks || []);

  // Load tasks from props (for logged-in user)
  useEffect(() => {
    if (data?.tasks) {
      setTasks(data.tasks);
    }
  }, [data]);

  // Handle Accept / Decline
  const handleTaskUpdate = (taskIndex, status) => {
    const updatedTasks = [...tasks];
    
    if (status === "Accepted") {
      updatedTasks[taskIndex].status = "Completed"; // Set task as completed
    } else {
      updatedTasks[taskIndex].status = "Failed"; // Set task as failed
    }

    setTasks(updatedTasks);

    // Update task status in local storage
    const storedEmployees = JSON.parse(localStorage.getItem("employee")) || [];
    const updatedEmployees = storedEmployees.map((emp) =>
      emp.email === data.email ? { ...emp, tasks: updatedTasks } : emp
    );

    localStorage.setItem("employee", JSON.stringify(updatedEmployees));
  };

  return (
    <div id="tasklist" className="w-full px-8 py-10">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-white mb-6">Your Assigned Tasks</h2>

      {/* Grid Layout for Proper Alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-red-500 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {/* Top Section with Priority & Date */}
              <div className="flex justify-between items-center">
                <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold">High</span>
                <span className="text-sm text-white">{task.taskDate}</span>
              </div>

              {/* Task Title & Description */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">{task.taskTitle}</h3>
                <p className="text-sm mt-2 text-gray-200">{task.taskDescription}</p>
              </div>

              {/* Accept & Decline Buttons or Status Display */}
              <div className="mt-4 flex flex-col items-center">
                {!task.status ? (
                  <div className="flex space-x-3">
                    <button
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white transition"
                      onClick={() => handleTaskUpdate(index, "Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white transition"
                      onClick={() => handleTaskUpdate(index, "Declined")}
                    >
                      Decline
                    </button>
                  </div>
                ) : (
                  <p
                    className={`mt-2 text-sm font-bold ${
                      task.status === "Completed" ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    Status: {task.status}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white col-span-full text-center">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
