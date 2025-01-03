import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextAppProvider from "./contextapi/ContextApp";
import { Provider } from "react-redux";
import {store} from './redux/store'
import { Toaster } from "react-hot-toast";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextAppProvider>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </ContextAppProvider>
);
