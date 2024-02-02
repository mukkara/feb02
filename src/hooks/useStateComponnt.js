import React, { useState } from "react";

export default function UseStateComponnt() {
  // const [data, setData] = useState(0);
  const [data, setData] = useState({
    count: 0,
    num: 10,
  });

  //   const clickHandel = () => setData(data + 1);
  //   const clickHandel = () => setData((pre) => pre + 1);

  const clickHandel = () => {
    setData((medhun) => ({
      count: medhun.count + 1,
      num: medhun.num + 10,
    }));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        UseStateComponnt {data.count}= {data.num}
      </div>
      <button onClick={clickHandel}>Increase Count</button>
    </>
  );
}
