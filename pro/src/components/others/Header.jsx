import React from "react";

const Header = ({ data }) => {  
  // Determine user name based on role
  const userName = data?.firstName || "Guest";  // ✅ Show correct firstName

  return (
    <div className="flex items-center justify-between">
      {/* Left Side - Greeting */}
      <div className="text-left">
        <h1 className="text-xl font-bold leading-tight text-white">
          Hello <br /> {userName} <span className="ml-2">👋</span>
        </h1>
      </div>

      {/* Right Side - Logout Button */}
      <div>
        <button 
          className="px-5 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition transform hover:scale-105 shadow-md"
          onClick={() => { localStorage.removeItem("loggedInUser"); window.location.reload(); }} // ✅ Logout functionality
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
