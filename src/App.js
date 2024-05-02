import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error";


const AppLayout = ()=>(
    <div className="AppLayout">
        <Header />
        <Body />
    </div>
)

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element : <About />
    },
    {
        path: "/contactus",
        element: <ContactUs />
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
