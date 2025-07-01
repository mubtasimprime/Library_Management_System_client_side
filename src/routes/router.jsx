import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { Suspense } from "react";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loading></Loading>}></Suspense>,
      },
    ],
  },
]);

export default router;
