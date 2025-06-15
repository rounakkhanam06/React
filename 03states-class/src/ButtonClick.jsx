// Events......

// ButtonClick.jsx
import React from "react";

function ButtonClick(e) {
  console.log("Target click", e.target);
  console.log("Mouse X :", e.clientX);
  console.log("Mouse Y :", e.clientY);
}

export default function ButtonClickComponent(){
  return <button onClick={(e) => ButtonClick(e)}>Click me & see the console </button>;
}

