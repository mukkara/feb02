import React from "react";
import ClassStateComonnet from "./state/classStateComponent";
import FunctionStateComponnte from "./state/functionStateComponnet";
import PropsParentComponetClass from "./props/classComponets/parentComponnet";
import PropsParentCompontFunction from "./props/functionComponet/ParentCompont";
import ClassFutures from "./classComponentFutures/classFutures";
import UseStateComponnt from "./hooks/useStateComponnt";
import UseEffectComponent from "./hooks/useEffectComponent";
import ClassParent from "./b/classParent";
import UseRefComponent from "./hooks/useRefComponent";
import UseMemoComponent from "./hooks/useMemoComponent";
import UseContextComponet from "./hooks/useContextComponet";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      {/* <ClassStateComonnet />
      <hr />
      <FunctionStateComponnte />
      <hr />
      <PropsParentComponetClass />
      <hr />
      <PropsParentCompontFunction /> */}
      {/* <ClassFutures /> */}
      {/* <UseStateComponnt /> */}
      {/* <UseEffectComponent /> */}

      {/* <UseRefComponent /> */}
      {/* <UseMemoComponent /> */}
      <UseContextComponet />

      {/* <ClassParent /> */}
    </div>
  );
}

export default App;
