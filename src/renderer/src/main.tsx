/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/app.main";
import WebApp from "./Web/Web.main";
import LaunchScreen from "./Styles/skyDS/LauchScreen";

const userAgent = navigator.userAgent.toLowerCase();
const isElectron = userAgent.indexOf(" skybrowser/") > -1;

const showLaunchScreen = true;

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        {isElectron ?
          <App />
        : <WebApp />}
      </BrowserRouter>
    </React.StrictMode>,
  );
};

if (showLaunchScreen) {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <LaunchScreen />
    </React.StrictMode>,
  );
  setTimeout(() => {
    renderApp();
  }, 3000);
} else {
  renderApp();
}
