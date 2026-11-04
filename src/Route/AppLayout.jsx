import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRouter from "../Components/Auth/ProtectedRouterProvider";
import { Layout } from "./Layout";
import Home from "../Pages/Home/Home";
import AddExpense from "../Pages/AddExpense/AddExpense";
import ExpenseItems from "../Pages/ExpenseItems/ExpenseItems";
import LoginForm from "../Components/LoginForm/LoginForm";
export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/addExpense",
        element: <AddExpense />,
      },
      {
        path: "/expenseItems",
        element: <ExpenseItems />,
      },
      // {
      //   path: "/useCallback",
      //   element: <UseCallback />,
      // },
      // {
      //   path: "/useReducer",
      //   element: <UseReducerDemo />,
      // },
      {
        // path: "/posts",
        // element: <Posts />,
      },
    ],
  },
  {
    path: "/loginForm",
    element: <LoginForm />,
  },
]);
