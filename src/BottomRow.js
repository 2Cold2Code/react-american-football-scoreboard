import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = useState(0);
  const [toGo, setToGo] = useState(10);
  const [ ballOn, setBallOn] = useState(0);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title" onClick={()=>{setDown(down + 1)}}>Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title" onClick={()=>{setToGo(toGo - 1)}}>To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title" onClick={()=>{setBallOn(ballOn + 1)}}>Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title" onClick={()=>{setQuarter(quarter + 1)}}>Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
