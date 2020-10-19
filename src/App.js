import React from "react";
import useMouseCoords from "./hooks/useMouseCoords";
import "./styles.css";

export default function App() {
  const [x,y] = useMouseCoords();
  return (
    <div className="App">
      <h1>Custom Hook Series</h1>
      <h2>Let's create some useful hooks in React.JS!</h2>
      <div className="container">
        <span>{x}</span>
        <span> - </span>
        <span>{y}</span>
      </div>
    </div>
  );
}
