import React from "react";
import { useNavigate } from "react-router-dom";

const TaskNumber = ({ data }) => {
  const navigate = useNavigate();
  const colors = ["bg-blue-500", "bg-yellow-500", "bg-green-500", "bg-red-500"];

  const taskCounts = {
    newTasks: data?.newTasks || 0,
    activeTasks: data?.activeTasks || 0,
    completedTasks: data?.completedTasks || 0,
    taskCount: data?.taskCount || 0,
  };

  const taskLabels = [
    { label: "New Tasks", count: taskCounts.newTasks, route: "/create-task" },
    { label: "In Progress", count: taskCounts.activeTasks, route: "/in-progress-tasks" },
    { label: "Completed", count: taskCounts.completedTasks, route: "/completed-tasks" },
    { label: "Total Tasks", count: taskCounts.taskCount, route: "/total-tasks" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6">
      {taskLabels.map((task, index) => (
        <div
          key={index}
          className={`h-40 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition transform hover:scale-105 ${colors[index]}`}
          onClick={() => navigate(task.route)}
        >
          <h2 className="text-4xl font-semibold text-white mb-2">{task.count}</h2>
          <h3 className="text-lg font-medium text-white">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNumber;
