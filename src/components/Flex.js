import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Flex = (props) => {
  const { boomData } = props;

  const flexItems = [
    { data: 1, cl: "flex-item-pink" },
    { data: 2, cl: "flex-item-pink" },
    { data: 3, cl: "flex-item-pink" },
    { data: 4, cl: "flex-item-pink" },
  ];

  const [flexData, setFlexData] = useState(flexItems);

  const fsetFlexData = () => {
    flexData.map((value) => {
      if (boomData > 0) {
        console.log("Boomdata: " + boomData);
        flexData[boomData - 1].cl = "flex-item";
      }
    });
  };

  useEffect(fsetFlexData, [boomData]);

  const numArr = flexData.map((value) => {
    return (
      <div className="row" key={value.data}>
        <span className={value.cl}> {value.data} </span>
      </div>
    );
  });

  return <>{numArr}</>;
};

export default Flex;
