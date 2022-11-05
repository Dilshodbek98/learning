import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import countries from "./slice"
export const store = configureStore({
  reducer: countries,
});

const Store = ({children}) => {
  return <div>{children}</div>;
}

export default Store