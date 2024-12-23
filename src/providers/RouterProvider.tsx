// react
import { Suspense, lazy } from "react";
import * as ReactRouterDOM from "react-router-dom";

// components
import Layout from "@/components/common/Layout";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";

// pages
const MainPage = lazy(() => import("@/pages"));
const TimelinePage = lazy(() => import("@pages/timeline/page"));
const ProjectsPage = lazy(() => import("@pages/projects/page"));
const PostsPage = lazy(() => import("@pages/posts/page"));
// libs
import { paths } from "@constants/paths";

export default function RouterProvider() {
    const router = ReactRouterDOM.createBrowserRouter([
        {
            element: (
                <AnimationFadeIn time={2}>
                    <Layout />
                </AnimationFadeIn>
            ),
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