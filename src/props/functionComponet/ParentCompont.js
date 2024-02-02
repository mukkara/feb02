import React from "react";
import ChildComponnet from "./ChildComponnet";

export default function ParentCompont() {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>ParentCompont Function</div>
        My Current Count:- {count}
        <br />
        <br />
        <ChildComponnet
          countProps={count}
          increaseProps={increase}
          decreaseProps={decrease}
        />
      </div>
    </>
  );
}
