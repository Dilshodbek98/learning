import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./components/redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);