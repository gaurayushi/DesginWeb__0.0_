import React from "react";

const NewTasks = ({ data }) => {
  return (
    <div className="p-10 bg-black text-white h-screen">
      <h2 className="text-3xl font-bold mb-6">New Tasks 📌</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.tasks?.filter(task => task.newTask).length > 0 ? (
          data.tasks.filter(task => task.newTask).map((task, index) => (
            <div key={index} className="bg-blue-500 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
              <p className="text-sm">{task.taskDescription}</p>
              <p className="text-xs">Due: {task.taskDate}</p>
            </div>
          ))
        ) : (
          <p>No new tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default NewTasks;
