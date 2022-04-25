import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Flex from "./components/Flex";
import { useState } from "react";
import ErrorFallBack from "./components/ErrorFallBack";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const [boomData, setBoomData] = useState(0);

  const setBoom = () => {
    setBoomData((boomData) => {
      if (boomData % 4 == 0 && boomData!=0) return boomData - 3;
      return boomData + 1;
    });
  };

  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <div className="flex-container">
          <Flex boomData={boomData} />
          <Counter boomData={boomData} setBoom={setBoom} />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
