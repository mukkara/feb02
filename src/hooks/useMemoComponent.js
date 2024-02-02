import React, { useMemo, useState } from "react";

// Example-1
// export default function UseMemoComponent() {
//   const [count, setCount] = useState(0);
//   const clickUseMemoHandel = useMemo(() => {
//     console.log("Lets Use UseMemo");
//     return count * 2;
//   }, [count]);

//   return (
//     <>
//       <div>UseMemoComponent</div>
//       <div>
//         <p>Count: {count}</p>
//         <p>Expensive Result:{clickUseMemoHandel}</p>
//         <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       </div>
//     </>
//   );
// }
// ------------------------------------
// Example-2
export default function UseMemoComponent() {
  const [inputStuff, setInputStuff] = useState("");
  const [inputCapture, setInputCapture] = useState(null);

  const calculateHandel = (e) => {
    console.log("Input Value Capture:", e.target.value);
    setInputStuff(e.target.value);
  };

  const clickUseMemoHandel = useMemo(() => {
    return inputStuff.length;
  }, [inputStuff]);

  const buttonClick = () => {
    setInputCapture(clickUseMemoHandel);
  };
  return (
    <>
      <input type="text" value={inputStuff} onChange={calculateHandel} />
      <button onClick={buttonClick}>Calculate</button>
      <p>Input Value:{inputStuff}</p>
      <p>Memory Value :{clickUseMemoHandel}</p>
      <p>Cache Value :{inputCapture}</p>
    </>
  );
}
