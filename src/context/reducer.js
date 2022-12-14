export const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + action.payload;
    case "minus":
      return state - action.payload;
    default:
      return state;
  }
};
