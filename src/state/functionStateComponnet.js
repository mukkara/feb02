import React, { useState } from "react";

export default function FunctionStateComponnte() {
  const [ageData, setAgeData] = useState(30);

  const updateData = () => {
    setAgeData(ageData + 1);
  };

  return (
    <React.Fragment>
      <div id="123">
        <div>Hi State In Function Component {ageData}</div>
        <button onClick={updateData}>Change Age</button>
      </div>
      <div id="1234"></div>
    </React.Fragment>
  );
}
