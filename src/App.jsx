import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { route } from "./Route/AppLayout";
import { UserProvider } from "./Context/UserContext";
import ThemeContext, { ThemeContextProvider } from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserProvider>
          <RouterProvider router={route} />
          <ToastContainer position="top-center" autoClose={1000} />
        </UserProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
