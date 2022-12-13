import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const GlobalStyls = createGlobalStyle`
  *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
       height:100%;
   }
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyls />
      <App />
    </BrowserRouter>
  </Provider>
);
