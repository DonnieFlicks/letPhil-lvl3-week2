import { useState } from "react";
import ContactForm from "./SimpleForm";

/*
Requirements:
- Create a toggle between light mode and dark mode
- Change background color and text color
- Button text should update based on current mode
  (e.g., "Switch to Dark Mode")
*/

/**
 * 1. User clicks button
 * 2. invoke setTheme
 * 3. add tailwind class to className on div
 *
 * {conditional ? success : failure }
 */

// = assignment, == loose comparison, === strict comparison

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button 
      onClick={toggleDark}
      className={darkMode ? "border-2 border-white" : "border-2 border-black"}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
