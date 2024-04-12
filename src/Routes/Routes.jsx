

import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home';
import About from './../Pages/About';

import Programs from "../Pages/Programs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/programs",
                element: <Programs />,
            },
        ],
    },
]);


