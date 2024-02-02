import React, { useContext } from "react";
import MyContext from "./useContextMian";

export default function UseContextComponetB(props) {
  const constVale = useContext(MyContext);

  return (
    <>
      <div style={{ height: "50px", backgroundColor: "white", margin: "20px" }}>
        <div>
          useContextComponetB {props.itsMyyN} {constVale}
        </div>
      </div>
    </>
  );
}
