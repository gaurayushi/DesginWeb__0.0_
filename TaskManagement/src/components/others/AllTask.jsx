import React from 'react';

const AllTask = () => {
  // Sample Task Data (Can be replaced with API data)
  const tasks = [
    { id: 1, name: "Ayushi", title: "Make a UI design", status: "Pending", color: "bg-red-400" },
    { id: 2, name: "John", title: "Fix API Issues", status: "In Progress", color: "bg-yellow-400" },
    { id: 3, name: "Emily", title: "Create a Dashboard", status: "Completed", color: "bg-green-400" },
    { id: 4, name: "Mark", title: "Test Backend APIs", status: "Review", color: "bg-blue-400" },
  ];

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5">
      {/* Task List (Stacked Layout) */}
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div key={task.id} className={`py-4 px-4 flex justify-between rounded-md shadow-md ${task.color}`}>
            <h2 className="font-semibold">{task.name}</h2>
            <h3 className="text-md">{task.title}</h3>
            <h5 className="text-sm">Status: {task.status}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
