// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContext } from "./context/AuthContext";
import { ApplicationViewContext } from "./context/ApplicationContext";
import { User } from "./context/UserContext";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <UserContext>
      <ApplicationViewContext>
        <User>
          <App />
        </User>
      </ApplicationViewContext>
    </UserContext>
  </CookiesProvider>
);
