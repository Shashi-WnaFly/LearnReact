import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Shimmer from "./components/Shimmer";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResItem from "./components/ResItem";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  UNSAFE_RouteContext,
} from "react-router-dom";
import userContext from "./utils/userContext";

const Service = lazy(() => import("./components/Service"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Default Name");

  useEffect(() => {
    const data = {
      Name: "Shashi Anand",
    };
    setUserName(data.Name);
  }, []);

  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="AppLayout">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

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
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
