import { BrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "../themes";
import { Provider } from "react-redux";

function TestProvider({ store, children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default TestProvider;
