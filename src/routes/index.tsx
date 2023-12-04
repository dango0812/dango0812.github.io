// react
import { lazy, Suspense } from 'react'
// react router dom
import { Navigate, useRoutes } from 'react-router-dom'
// paths
import { paths } from './paths';
// pages
const HomePage = lazy(() => import('src/pages/home/page'));

export default function Router() {
    return useRoutes([
        {
            path: paths.home,
            element: (
                <Suspense fallback={<div>loading</div>}>
                    <HomePage />
                </Suspense>
            )
        },
        // no match 404
        {
            path: '*',
            element: <Navigate to={paths.page404} replace />
        }
    ]);
}