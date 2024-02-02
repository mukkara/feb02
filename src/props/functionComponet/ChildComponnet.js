import React from "react";

export default function ChildComponnet({
  countProps,
  increaseProps,
  decreaseProps,
}) {
  return (
    <>
      <div>ChildComponnet</div>
      <button onClick={decreaseProps}>-</button>
      <span>{countProps}</span>
      <button onClick={increaseProps}>+</button>
    </>
  );
}
