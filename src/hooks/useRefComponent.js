import React, { useEffect, useRef, useState } from "react";

function UseRefComponent() {
  const nameRef = useRef(1);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("you call me now ->UseEffect", nameRef.current, "Count", count);
  }, [count]);

  const countIncreseHandel = () => {
    let abc = nameRef.current;
    setCount(abc);
  };
  return (
    <>
      {console.log("Hi You render me again")}
      <div>
        useRefComponent {count} === {nameRef.current}
      </div>
      <button onClick={countIncreseHandel}>Count Change</button>
    </>
  );
}

export default UseRefComponent;
