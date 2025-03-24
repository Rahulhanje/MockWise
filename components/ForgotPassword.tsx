'use client'
import { useState } from "react";
import { auth } from "@/firebase/client"; // Ensure this points to your client-side Firebase configuration
import { sendPasswordResetEmail } from "firebase/auth";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e:any) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (erro:any) {
      setMessage("Error: " + erro.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      
    >
      <div className="bg-transparent shadow-xl rounded-2xl p-8  w-[550px]">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          🔐 Forgot Password
        </h2>

        <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <motion.button
            type="submit"
            className="p-3 bg-slate-500 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all"
          >
            🔄 Reset Password
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-medium"
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.div>

  );
};

export default ForgotPassword;
