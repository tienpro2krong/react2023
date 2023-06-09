import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";

const Hompage = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming'));
const SearchPage = lazy(() => import('../pages/Search'));
const NotfounPage = lazy(() => import('../pages/404'));
const DetailPage = lazy(() => import('../pages/Detail'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<SpinMovies />}>
                <Hompage />
            </Suspense>
        ),
        errorElement: <NotfounPage />
    },
    {
        path: "/upcoming",
        element: (
            <Suspense fallback={<SpinMovies />}>
                <UpcomingPage />
            </Suspense>
        ),
        errorElement: <NotfounPage />
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<SpinMovies />}>
                <SearchPage />
            </Suspense>
        ),
        errorElement: <NotfounPage />
    },
    {
        path: "/movie/:slug/:id",
        element: (
            <Suspense fallback={<SpinMovies />}>
                <DetailPage />
            </Suspense>
        ),
        errorElement: <NotfounPage />
    }
]);

export default router;