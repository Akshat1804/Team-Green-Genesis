import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftBar from "../components/LeftBar";

const states = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"];

const AuthPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!selectedState) {
      alert("Please select a state.");
      return;
    }
    localStorage.setItem("userState", selectedState);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Select Your State</h2>
      <select
        className="border p-2 rounded"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default AuthPage;
