import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login"; 
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"; 
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";
import AuthContext from "./context/AuthProvider";
import InProgressTasks from "./TaskList/CompletedTasks";
import CreateTask from "./TaskList/InProgressTasks";


const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext); 

  // Load logged-in user from localStorage on app mount
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, [authData]); // ✅ Added dependency to update user when authData changes

  // Handle user login
  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    // 🔹 Check if user is an admin
    const foundAdmin = admin.find(adm => adm.email === email && adm.password === password);
    if (foundAdmin) {
      const adminUser = { ...foundAdmin, role: "admin" };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      console.log("Admin logged in successfully");
      return;
    }

    // 🔹 Check if user is an employee
    const foundEmployee = employees.find(emp => emp.email === email && emp.password === password);
    if (foundEmployee) {
      const employeeUser = { ...foundEmployee, role: "employee" };
      setUser(employeeUser);
      localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      console.log("Employee logged in successfully");
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <Router>
      <Routes>
        {/* Default route: If not logged in, show login page */}
        <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} />

        {/* Dashboard: Redirect based on user role */}
        <Route path="/dashboard" element={
          user?.role === "admin" ? <AdminDashboard /> : user?.role === "employee" ? <EmployeeDashboard data={user} /> : <Navigate to="/" />
        } />

        {/* Task Routes */}
        <Route path="/create-task" element={<CreateTask user={user} />} />
        <Route path="/in-progress-tasks" element={<InProgressTasks user={user} />} />

        {/* Catch-all route: Redirect to login if user is not authenticated */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;