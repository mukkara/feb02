import React from "react";
import UseContextComponetA from "./useContextComponetA";
import MyContext from "./useContextMian";

export default function UseContextComponet() {
  const myData = "Ranga Is My Name";
  const myData1 = "===>Ranga Is My Name1";

  //
  return (
    <>
      <MyContext.Provider value={myData1}>
        <div style={{ height: "150px", backgroundColor: "pink" }}>
          <div>UseContextComponet</div>
          <UseContextComponetA itMyanme={myData} />
        </div>
      </MyContext.Provider>
    </>
  );
}
