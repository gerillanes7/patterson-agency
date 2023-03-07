import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from "../components/Layout/Layout";
import MyCart from "../pages/MyCart/MyCart";
import ShowCase from "../pages/ShowCase/ShowCase";

const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <ShowCase />
            </Layout>
        )
    },
    {
        path: '/my-cart',
        element: <Layout>
            <MyCart />
        </Layout>
    }
])

export const Routing = () => (
    <RouterProvider router={routes} />
)
