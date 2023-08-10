import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  selectAllAuthors,
} from "./features/authors/authorsSlice";

import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import { alreadyLogged } from "./features/authors/loginSlice";

const Login = lazy(() => import("./components/Login"));

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
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
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
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
