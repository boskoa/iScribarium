import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  selectAllAuthors,
} from "./features/authors/authorsSlice";

import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const authors = useSelector(selectAllAuthors);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [],
    },
  ]);

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
