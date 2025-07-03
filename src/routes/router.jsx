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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/add-books",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
