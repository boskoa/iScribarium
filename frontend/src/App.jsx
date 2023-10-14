import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import { alreadyLogged } from "./features/login/loginSlice";
import Assistant from "./components/Assistant";
import { getAllArticles } from "./features/articles/articlesSlice";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./themes";
import Loading from "./components/Loading";

const Login = lazy(() => import("./components/Login"));
const NewArticle = lazy(() => import("./components/NewArticle"));
const ArticlePage = lazy(() => import("./components/ArticlePage"));
const EditArticle = lazy(() => import("./components/EditArticle"));
const SearchResults = lazy(() => import("./components/SearchResults"));
const Authors = lazy(() => import("./components/Authors"));
const Register = lazy(() => import("./components/Register"));
const Category = lazy(() => import("./components/Category"));
const Categories = lazy(() => import("./components/Categories"));
const Articles = lazy(() => import("./components/Articles"));
const AuthorSettings = lazy(() => import("./components/AuthorSettings"));
const AdminPage = lazy(() => import("./components/AdminPage"));

function App() {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

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
      element: <Layout handleTheme={handleTheme} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "new-article",
          element: (
            <Suspense fallback={<Loading />}>
              <NewArticle />
            </Suspense>
          ),
        },
        {
          path: "articles/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ArticlePage />
            </Suspense>
          ),
        },
        {
          path: "edit-article/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <EditArticle />
            </Suspense>
          ),
        },
        {
          path: "searched/:title",
          element: (
            <Suspense fallback={<Loading />}>
              <SearchResults />
            </Suspense>
          ),
        },
        {
          path: "authors",
          element: (
            <Suspense fallback={<Loading />}>
              <Authors />
            </Suspense>
          ),
        },
        {
          path: "categories/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          ),
        },
        {
          path: "categories",
          element: (
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          ),
        },
        {
          path: "articles",
          element: (
            <Suspense fallback={<Loading />}>
              <Articles />
            </Suspense>
          ),
        },
        {
          path: "authors/settings",
          element: (
            <Suspense fallback={<Loading />}>
              <AuthorSettings />
            </Suspense>
          ),
        },
        {
          path: "admin",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.localStorage.setItem(
      "iScribariumTheme",
      theme === "light" ? "dark" : "light",
    );
  }

  useEffect(() => {
    const loggedAuthor = window.localStorage.getItem("loggedIScribariumAuthor");
    if (loggedAuthor) {
      dispatch(alreadyLogged(JSON.parse(loggedAuthor)));
    }

    const previousTheme = window.localStorage.getItem("iScribariumTheme");
    if (previousTheme) setTheme(previousTheme);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllArticles(""));
  }, [dispatch]);

  useEffect(() => {
    document.querySelector(".scroll").style.backgroundColor =
      theme === "dark" ? "rgb(20, 85, 170)" : "rgb(145, 213, 244)";
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        <RouterProvider router={router} />
        <Assistant />
      </ThemeProvider>
    </>
  );
}

export default App;
