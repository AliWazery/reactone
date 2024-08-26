import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Footer from "./Footer";
import Counter from "./Counter";
import FAQS from "./FAQS";
import Doublecount from "./Doublecount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Footer />
    <Counter />
    <FAQS />
    <Doublecount/>
  </React.StrictMode>
);

reportWebVitals();
