import React from "react";
import UseContextComponetB from "./useContextComponetB";

export default function UseContextComponetA(props) {
  return (
    <>
      <div style={{ height: "100px", backgroundColor: "blue", margin: "20px" }}>
        <div>useContextComponetA {props.itMyanme}</div>
        <UseContextComponetB itsMyyN={props.itMyanme} />
      </div>
    </>
  );
}
