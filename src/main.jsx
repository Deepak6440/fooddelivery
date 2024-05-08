import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./components/context/StoreContext.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <GoogleOAuthProvider clientId="587430310771-l1nul39i40vfiiunjb3njdr56gs0vbje.apps.googleusercontent.com">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);
