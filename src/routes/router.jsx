import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { Suspense } from "react";
import Loading from "../components/Loading";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBooks from "../pages/AddBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../context/PrivateRoute";
import ErrorLayout from "../layouts/ErrorLayout";
import axios from "axios";
import CategoryBookPage from "../pages/CategoryBookPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/all-books",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/all-books`),
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <AllBooks></AllBooks>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:category",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/books/${params.category}`),
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <CategoryBookPage></CategoryBookPage>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-books",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
