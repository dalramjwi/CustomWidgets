import React, { useState } from "react";
import Start from "./components/Start";
import MainPage from "./components/Main";

const App: React.FC = () => {
  const [mainPage, setMainPage] = useState<boolean>(false);

  return (
    <div>
      {!mainPage ? (
        <Start setMainPage={setMainPage} />
      ) : (
        <div>
          <MainPage />
        </div>
      )}
    </div>
  );
};

export default App;
