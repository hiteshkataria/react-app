import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from React!</h1>
      <p>This app works on Windows 7 with Node.js v12+</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);