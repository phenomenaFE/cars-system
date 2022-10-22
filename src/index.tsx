import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";
import "../src/index.css";
import App from "./App";

import router from "./Setup/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// An atom represents a piece of state. 
// Atoms can be read from and written to from any component

root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* Suspense lets your components “wait” for something */}
    
      <RouterProvider router={router} />
      
      
      
    </RecoilRoot>
  </React.StrictMode>
);
