import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRouter from "../Components/Auth/ProtectedRouterProvider";
import { Layout } from "./Layout";
import Home from "../Pages/Home/Home";
import AddExpense from "../Pages/AddExpense/AddExpense";
import ExpenseItems from "../Pages/ExpenseItems/ExpenseItems";
import LoginForm from "../Components/LoginForm/LoginForm";
import ReadMoreCard from "../Pages/ReadMoreCard/ReadMoreCard";
import UserProfileEdit from "../Components/UserProfileEdit/UserProfileEdit";
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
        path: "/addExpense/:id",
        element: <AddExpense />,
      },
      {
        path: "/expenseItems",
        element: <ExpenseItems />,
      },
      {
        path: "//readMoreCard/:id",
        element: <ReadMoreCard />,
      },
      {
        path: "/userProfileEdit",
        element: <UserProfileEdit />,
      },
      // {
      //   path: "/useCallback",
      //   element: <UseCallback />,
      // },
      // {
      //   path: "/useReducer",
      //   element: <UseReducerDemo />,
      // },
      // {
      //   // path: "/posts",
      //   // element: <Posts />,
      // },
    ],
  },
  {
    path: "/loginForm",
    element: <LoginForm />,
  },
]);
