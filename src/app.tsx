import React from "react";
import DivClass from "./divClass";
const App = () => {
  const div1 = new DivClass("Welcome!", "white", "blue");

  return (
    <div>
      <h1>Welcome to my React App!</h1>
      <p>This is a simple React application.</p>
      {div1.divSet()}
    </div>
  );
};
export default App;
