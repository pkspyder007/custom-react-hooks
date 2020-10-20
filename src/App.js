import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles.css";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  console.log(isDark);
  
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <h1>Custom Hook Series</h1>
      <h2>Let's create some useful hooks in React.JS!</h2>
      <div className="container">
        <span>Persist State to localStorage</span>
      </div>
      <br />
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme </button>
    </div>
  );
}
