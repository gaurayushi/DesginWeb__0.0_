import React from "react";
import Header from "../others/Header";
import { motion } from "framer-motion";
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";

const AdminDashboard = ({ data }) => {  // ✅ Accept data as a prop
  return (
    <div className="h-screen w-full p-10 bg-black text-white">
      <Header data={data} /> {/* ✅ Pass admin data to header */}
      <CreateTask />

      <div className="flex justify-center items-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#1E1E1E] to-[#292929] p-8 rounded-xl w-full max-w-3xl shadow-xl"
        >
          <form className="grid grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex flex-col space-y-4">
              <label className="text-sm font-medium">Task Title</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Make a UI design"
                className="w-full p-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <label className="text-sm font-medium">Date</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="date"
                className="w-full p-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <label className="text-sm font-medium">Assign to</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Employee name"
                className="w-full p-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Right Section - Description */}
            <div className="flex flex-col space-y-4">
              <label className="text-sm font-medium">Description</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Enter detailed description of task (max 500 words)"
                className="w-full h-full p-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                rows="8"
              ></motion.textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-all shadow-lg"
              >
                Create Task
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      <AllTask />
    </div>
  );
};

export default AdminDashboard;  
