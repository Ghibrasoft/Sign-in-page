import React from "react";
import SignIn from "./components/sign-in/SignIn";
import { Routes, Route } from "react-router-dom";
import App from "./App";


function MainRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
