import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {  // ✅ Correctly receiving handleLogin prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // ✅ Calls the login function correctly
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#3B82F6] to-[#9333EA]">
      {/* Glassmorphic Animated Login Box */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-3xl p-10 w-96 border border-white/20"
      >
        {/* Login Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-md"
        >
          Welcome Back!
        </motion.h2>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col space-y-5"
          onSubmit={submitHandler} // ✅ Correctly handles form submission
        >
          {/* Email Input */}
          <div className="relative">
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 hover:scale-105 shadow-md"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 hover:scale-105 shadow-md"
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-500"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Signup Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-white/80 mt-6"
        >
          Don't have an account?{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Sign up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
