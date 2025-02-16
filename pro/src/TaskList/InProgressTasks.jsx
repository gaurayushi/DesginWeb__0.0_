import React, { useEffect, useState } from "react";

const InProgressTasks = ({ user }) => {
  const [inProgressTasks, setInProgressTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const employees = JSON.parse(localStorage.getItem("employee")) || [];
      const loggedInEmployee = employees.find(emp => emp.email === user.email);

      if (loggedInEmployee) {
        // Filter tasks that are "In Progress"
        const filteredTasks = loggedInEmployee.tasks.filter(task => task.status === "In Progress");
        setInProgressTasks(filteredTasks);
      }
    }
  }, [user]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-white mb-6">In Progress Tasks 🔄</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {inProgressTasks.length > 0 ? (
          inProgressTasks.map((task, index) => (
            <div
              key={index}
              className="bg-yellow-500 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
              <p className="text-sm">{task.taskDescription}</p>
              <p className="text-sm">Due: {task.taskDate}</p>
              <p className="mt-3 text-sm font-bold text-gray-100 text-center">🔄 In Progress</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">No in-progress tasks.</p>
        )}
      </div>
    </div>
  );
};

export default InProgressTasks;
