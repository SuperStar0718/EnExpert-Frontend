import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    {/* <Suspense fallback={<div>Loading... </div>}> */}
    <App />
    {/* </Suspense> */}
    {/* <App /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
