import React, { useState } from "react";
import Start from "./components/Section/Start";
import Main from "./components/Section/Main";

const App: React.FC = () => {
  const [mainPage, setMainPage] = useState<boolean>(false);

  return (
    <div>
      {!mainPage ? (
        <Start setMainPage={setMainPage} />
      ) : (
        <div>
          <Main />
        </div>
      )}
    </div>
  );
};

export default App;
