import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = ()=>(
    <div className="AppLayout">
        <Header />
        <Outlet />
    </div>
)

const AppRouter = createBrowserRouter([
    { 
        path: "/",
        element : <AppLayout />,
        children: [
            {
                path: "/home",
                element: <Body />
            },
            {
                path: "/about",
                element : <About />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            }
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
