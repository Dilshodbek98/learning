import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import Counter from "./redux/components/Counter";
import { store } from "./redux/components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
