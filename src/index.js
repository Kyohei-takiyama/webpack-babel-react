import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, [state]);

  console.log("render");

  return (
    <div>
      <h1>Hello</h1>
      <label>ステート更新</label>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
