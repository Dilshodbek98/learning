import React, { useContext } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { Mycontext } from "./context/context";
import Simple2 from "./simple2";

const Simple = () => {
  const [state, dispatch] = useContext(Mycontext)
  console.log("parent")
  const data = useMemo(()=>{
    return {a:"3"}
  },[])
  const data2 = useCallback((param)=>{
    return {a: param}
  },[])
  return (
    <div>
      <h2>Number {state}</h2>
      <button onClick={() => dispatch({ type: "plus", payload: 10 })}>
        plus
      </button>
      <button onClick={() => dispatch({ type: "minus", payload: 10 })}>
        minus
      </button>
      <Simple2 num={data} numm={data2}/>
    </div>
  );
};

export default Simple;
