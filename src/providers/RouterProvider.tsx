// react
import { Suspense, lazy } from "react";
import * as ReactRouterDOM from "react-router-dom";

// components
import Layout from "@/components/common/Layout";

// pages
const MainPage = lazy(() => import("@app/page"));
const TimelinePage = lazy(() => import("@app/timeline/page"));
const ProjectsPage = lazy(() => import("@app/projects/page"));
const PostsPage = lazy(() => import("@app/posts/page"));
// libs
import { paths } from "@constants/paths";

export default function RouterProvider() {
    const router = ReactRouterDOM.createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: paths.home,
                    element: <MainPage />
                },
                {
                    path: paths.timeline,
                    element: <TimelinePage />
                },
                {
                    path: paths.projects,
                    element: <ProjectsPage />
                },
                {
                    path: paths.posts,
                    element: <PostsPage />
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