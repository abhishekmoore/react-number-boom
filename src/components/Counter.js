import React from "react";

const Counter = (props) => {
  const { boomData,setBoom } = props;

  return (    
      <button onClick={ setBoom }> BOOOM {boomData} </button>
  );
};

export default Counter;
