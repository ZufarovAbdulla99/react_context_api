import React, { createContext, useContext, useState } from "react";

import UserForm from "./components/UserForm";
import UserSummary from "./components/UserSummary";
import {
  ThemeContext,
  ThemeContextProvider,
  useTheme,
} from "./components/ThemeContextProvider";

export const UserContext = createContext();

// Main App Component demonstrating prop drilling
const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`container mx-auto p-6 max-w-md ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <UserContext.Provider
        value={{ username, setUsername, email, setEmail, age, setAge, theme }}
      >
        <h1 className="text-2xl font-bold mb-6">User Registration Form</h1>
        <div className="flex flex-col justify-center items-center p-3">
          <h2 className=" text-center">Current theme: {theme}</h2>
          <button
            onClick={toggleTheme}
            className={`mt-4 p-2 rounded-lg ${
              theme === "dark" ? "bg-gray-200 text-black" : "bg-gray-600 text-white"
            }`}
          >
            Toggle Theme
          </button>
        </div>
        <UserForm />
        <UserSummary />
      </UserContext.Provider>
    </div>
  );
};

export default App;
