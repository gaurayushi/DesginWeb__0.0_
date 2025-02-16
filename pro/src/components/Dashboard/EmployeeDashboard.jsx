import React from 'react';
import Header from '../others/Header';
import TaskNumber from '../others/TaskNumber';
import TaskList from '../TaskList/TaskList';


const EmployeeDashboard = ({ data }) => {  // ✅ Accept data as a prop
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} /> {/* ✅ Pass employee data */}
      <TaskNumber data={data} />
      <TaskList data={data} />
     
      
    </div>
  );
};

export default EmployeeDashboard;
