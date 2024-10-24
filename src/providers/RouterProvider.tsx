// react
import { Suspense, lazy } from "react";
import * as ReactRouterDOM from "react-router-dom";

// components
import Layout from "@/components/common/Layout";

// pages
const MainPage = lazy(() => import("@app/page"));

export default function RouterProvider() {
    const router = ReactRouterDOM.createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <MainPage />
                }
            ]
        }
    ]);
  
    return (
        <Suspense fallback={null}>
            <ReactRouterDOM.RouterProvider router={router}/>
        </Suspense>
    )
};