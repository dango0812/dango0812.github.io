// react
import { Suspense, lazy } from "react";
import * as ReactRouterDOM from "react-router-dom";

// pages
const MainPage = lazy(() => import("@app/page"));

export default function RouterProvider() {
    const router = ReactRouterDOM.createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        }
    ]);
  
    return (
        <Suspense fallback={null}>
            <ReactRouterDOM.RouterProvider router={router}/>
        </Suspense>
    )
};