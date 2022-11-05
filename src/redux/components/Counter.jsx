import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/slice";

const Counter = () => {
  const list = useSelector((state) => state.location);
  const [value, setValue] = useState()
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {list.map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
      </div>
      <input
        onClick={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Country"
      />
      <button onClick={() => dispatch(add(value))}>add</button>
    </div>
  );
};

export default Counter;
