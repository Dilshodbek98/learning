import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import counter from "./slice";

export const store = configureStore({
  reducer: counter,
});

const Store = ({ children }) => {
  return <div>{children}</div>;
};

export default Store;
