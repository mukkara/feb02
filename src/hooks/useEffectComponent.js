import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(1); //1
  // const [name, setName] = useState("Medhun"); //Ranga
  // const [show, setShow] = useState(false); //true
  const [personData, setPersonData] = useState([]);

  // React.useEffect(() => console.log("Use Effect 1")); //1st time+infinity tilems call when chnges done
  // useEffect(() => console.log("Use Effect 2"), [count, name]); //1stTime + when ever count value it updating
  // React.useEffect(() => console.log("Use Effect 3"), []); //Single Time

  // const countClicHandel2 = () => {
  //   setName((prevalue) => "Ranga");
  // };

  // const countClicHandel3 = () => {
  //   setShow((prevalue) => !prevalue);
  // };

  // useEffect(() => {
  //   console.log("Hi UseEffect 11");
  //   return console.log("Hi UseEffect 12");
  // });

  // useEffect(() => {
  //   console.log("Hi UseEffect 21");
  //   return console.log("Hi UseEffect 22");
  // }, []);

  useEffect(() => {
    console.log("Hi UseeFFECT");
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      // .then((fdata) => console.log("Fdata:", [fdata]))
      .then((fdata) => setPersonData([...personData, ...[fdata]]));
  }, [count]);

  const countClicHandel1 = () => {
    setCount((preValue) => preValue + 1);
  };
  return (
    <>
      {/* {console.log("Return personData 1", personData)}
      {console.log("Return personData 2", Array.isArray(personData))} */}
      {/* {console.log("Return personData", typeof personData)}
       */}
      {/* <div>UseEffectComponent {count}</div> */}
      <button onClick={countClicHandel1}>Click 1</button>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {personData.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td> {item.id}</td>
              <td> {item.title}</td>
              <td>{item.completed ? "Pass" : "Fail"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <p>
        My Name is {name} === {show ? "Hi" : "Bye"}
      </p>
      <button onClick={countClicHandel2}>Click 2</button>
      <button onClick={countClicHandel3}>Click 3</button> */}
    </>
  );
}
