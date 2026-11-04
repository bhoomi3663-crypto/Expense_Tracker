import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./Components/LoginForm/LoginForm";
import { route } from "./Route/AppLayout";

function App() {
  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}

export default App;
