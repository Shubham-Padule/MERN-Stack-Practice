//app.js
import { useState } from "react";
import "./App.css";
import SignInForm from "./components/Signup";
import LoginForm from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={LoginForm}></Route>
        <Route path="/signup" Component={SignInForm}></Route>
      </Routes>
    </div>
  );
}
export default App;
