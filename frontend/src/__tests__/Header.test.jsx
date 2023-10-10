import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import configureStore from "redux-mock-store";
import TestProvider from "./TestProvider";
import userEvent from "@testing-library/user-event";
import Header from "../components/Layout/Header";
import ThemeButton from "../components/Layout/Header/ThemeButton";

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

describe("Testing Header component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Renders component", () => {
    render(
      <TestProvider store={store}>
        <Header />
      </TestProvider>,
    );

    const avatar = screen.getByAltText("user avatar");
    expect(avatar).toBeInTheDocument();
  });

  test("Renders user menu", async () => {
    const user = userEvent.setup();
    render(
      <TestProvider store={store}>
        <Header />
      </TestProvider>,
    );

    const avatar = screen.getByAltText("user avatar");
    await user.click(avatar);
    const logout = screen.getByText("odjava");
    expect(logout).toBeInTheDocument();
    const menu = logout.parentElement;
    expect([...menu.children]).toHaveLength(2);
  });

  test("Renders theme button", async () => {
    const mockHandle = vi.fn();
    const user = userEvent.setup();
    render(
      <TestProvider store={store}>
        <ThemeButton handleTheme={mockHandle} />
      </TestProvider>,
    );

    const button = screen.getByTitle("Change theme");
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(mockHandle).toHaveBeenCalledOnce();
  });
});
