import { lazy, Suspense } from "react";
import { createBrowserRouter, defer } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";
import AuthLayoutMovies from "../components/Auth";
import PublicLayout from "../components/PublicLayout";
import ProtectedLayout from "../components/ProtectedLayout";
import { element } from "prop-types";
// viet ham lay du lieu nguoi dung da luu vao localstorage

const Hompage = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming'));
const SearchPage = lazy(() => import('../pages/Search'));
const NotfounPage = lazy(() => import('../pages/404'));
const DetailPage = lazy(() => import('../pages/Detail'));
const LoginPage = lazy(() => import('../pages/Login'));
const FavoritePage = lazy(() => import('../pages/Favorite'));

const getUserData = () => {
    return new Promise((resole) => {
        setTimeout(() => {
            const user = window.localStorage.getItem("reactjs2302-movie");
            resole(user);
        }, 3000)
    })
}

const router = createBrowserRouter([
    {
        element: <AuthLayoutMovies />,
        loader: () => defer({ userPromise: getUserData() }),
        errorElement: <NotfounPage />,
        children: [
            {
                element: <PublicLayout />,
                errorElement: <NotfounPage />,
                children: [
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
                        path: "/search/:name",
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
                    },
                    {
                        path: "/login",
                        element: (
                            <Suspense fallback={<SpinMovies />}>
                                <LoginPage />
                            </Suspense>
                        ),
                        errorElement: <NotfounPage />
                    }
                ]
            },
            {
                element: <ProtectedLayout />,
                errorElement: <NotfounPage />,
                children: [
                    {
                        path: '/favorite',
                        element: (
                            <Suspense
                                fallback={<SpinMovies />}>
                                <FavoritePage />
                            </Suspense>
                        ),
                        errorElement: <NotfounPage />
                    }
                ]
            }
        ]
    },

]);

export default router;