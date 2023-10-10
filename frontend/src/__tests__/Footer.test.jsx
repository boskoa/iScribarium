import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import configureStore from "redux-mock-store";
import TestProvider from "./TestProvider";
import Footer from "../components/Layout/Footer";

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

describe("Testing Footer component", () => {
  test("Renders component", () => {
    const store = mockStore(defaultStore);

    render(
      <TestProvider store={store}>
        <Footer />
      </TestProvider>,
    );

    const footer = screen.getByText(/enciklopedija/i);
    expect(footer).toBeInTheDocument();
  });
});
