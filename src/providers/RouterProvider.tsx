// react
import { Suspense, lazy } from "react";
import * as ReactRouterDOM from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import Layout from "@/components/common/Layout";
import AnimationFadeIn from "@components/animation/AnimationFadeIn";

// pages
const MainPage = lazy(() => import("@/pages"));
const CareerPage = lazy(() => import("@/pages/career/page"));
const ProjectsPage = lazy(() => import("@/pages/project/page"));
const ProjectDetailPage = lazy(() => import("@/pages/project/detail/page"));
const BlogPostPage = lazy(() => import("@pages/blog/page"));

// libs
import { paths } from "@constants/paths";

export default function RouterProvider() {
    const router = ReactRouterDOM.createBrowserRouter([
        {
            element: (
                <AnimationFadeIn
                    time={2}
                    css={css`
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                    `}
                >
                    <Layout />
                </AnimationFadeIn>
            ),
            children: [
                {
                    path: paths.home,
                    element: <MainPage />
                },
                {
                    path: paths.career,
                    element: <CareerPage />
                },
                {
                    path: paths.project,
                    children: [
                        {
                            index: true,
                            element: <ProjectsPage />
                        },
                        {
                            path: paths.project + "/:slug",
                            element: <ProjectDetailPage />
                        }
                    ]
                },
                {
                    path: paths.blog,
                    element: <BlogPostPage />
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