import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./profile/profile.jsx";
import UserContextProvider from "./contextprovider/contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <App />
      <Profile />
    </UserContextProvider>
  </StrictMode>
);
