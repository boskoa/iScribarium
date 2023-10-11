import { render, screen, act } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import configureStore from "redux-mock-store";
import TestProvider from "./TestProvider";
import userEvent from "@testing-library/user-event";
import Categories from "../components/Categories";

const mockStore = configureStore([]);

const defaultStore = {
  login: {
    author: {
      token: "",
      id: 1,
      name: "Šećo",
      username: "seco",
      email: "seco@example.com",
    },
    loading: false,
    error: null,
  },
  articles: [
    {
      id: 32,
      title: "Svemir",
      content:
        "Pun je planeta. Opcije za istraživanje su razlikovanje dole od levo.",
      authorId: 1,
      createdAt: "2023-09-30T13:05:27.888Z",
      updatedAt: "2023-09-30T13:05:27.888Z",
      categories: [
        {
          name: "Dole levo",
          article_category: {
            categoryId: 12,
            articleId: 32,
          },
        },
      ],
    },
  ],
};

describe("Testing Categories component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Renders component", () => {
    render(
      <TestProvider store={store}>
        <Categories />
      </TestProvider>,
    );

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/kategorije/i);
  });

  test("Can click on ordering button", async () => {
    const user = userEvent.setup();

    render(
      <TestProvider store={store}>
        <Categories />
      </TestProvider>,
    );

    const button = screen.getByTestId("name");
    expect(button).toHaveTextContent(/⇡/i);
    act(async () => {
      await user.click(button);
      const buttonAfter = screen.getByTestId("name");
      expect(buttonAfter).toHaveTextContent(/⇣/i);
    });
  });
});

/*
const mockHelmClick = vi.fn();
    const user = userEvent.setup();
    */
