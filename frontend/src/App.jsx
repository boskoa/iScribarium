import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  selectAllAuthors,
} from "./features/authors/authorsSlice";

import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import { alreadyLogged } from "./features/login/loginSlice";
import Assistant from "./components/Assistant";
import { getAllArticles } from "./features/articles/articlesSlice";

const Login = lazy(() => import("./components/Login"));
const NewArticle = lazy(() => import("./components/NewArticle"));
const ArticlePage = lazy(() => import("./components/ArticlePage"));
const EditArticle = lazy(() => import("./components/EditArticle"));
const SearchResults = lazy(() => import("./components/SearchResults"));
const Authors = lazy(() => import("./components/Authors"));
const Register = lazy(() => import("./components/Register"));

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const authors = useSelector(selectAllAuthors);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback="Loading...">
          <Login />
        </Suspense>
      ),
    },
    {
      path: "register",
      element: (
        <Suspense fallback="Loading...">
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "new-article",
          element: (
            <Suspense fallback="Loading">
              <NewArticle />
            </Suspense>
          ),
        },
        {
          path: "articles/:id",
          element: (
            <Suspense fallback="Loading">
              <ArticlePage />
            </Suspense>
          ),
        },
        {
          path: "edit-article/:id",
          element: (
            <Suspense fallback="Loading">
              <EditArticle />
            </Suspense>
          ),
        },
        {
          path: "searched/:title",
          element: (
            <Suspense fallback="Loading">
              <SearchResults />
            </Suspense>
          ),
        },
        {
          path: "authors",
          element: (
            <Suspense fallback="Loading">
              <Authors />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  useEffect(() => {
    const loggedAuthor = window.localStorage.getItem("loggedIScribariumAuthor");
    if (loggedAuthor) {
      dispatch(alreadyLogged(JSON.parse(loggedAuthor)));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllAuthors(""));
    dispatch(getAllArticles(""));
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <Assistant />
    </>
  );
}

export default App;
