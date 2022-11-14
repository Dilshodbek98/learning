import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./redux/slice";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(plus(10))}>plus</button>
      <button onClick={() => dispatch(minus(10))}>minus</button>
    </div>
  );
};

export default Counter;
