import React, { useState } from "react";
import Start from "./components/Start";

const App: React.FC = () => {
  const [mainPage, setMainPage] = useState<boolean>(false);

  return (
    <div>
      {!mainPage ? (
        <Start setMainPage={setMainPage} />
      ) : (
        <div>
          <h1>Main Page Content</h1>
        </div>
      )}
    </div>
  );
};

export default App;
