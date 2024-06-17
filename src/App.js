import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResItem from "./components/ResItem";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Service = lazy(() => import("./components/Service"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => (
  <div className="AppLayout">
    <Header />
    <Outlet />
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About page is not available</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/service",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurant_menu/:resId",
        element: <ResItem />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
