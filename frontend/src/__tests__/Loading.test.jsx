import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Loading from "../components/Loading";
import configureStore from "redux-mock-store";
import TestProvider from "./TestProvider";

const mockStore = configureStore([]);

const defaultStore = {
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
    {
      id: 2,
      title: "Muva",
      content:
        "Najdosadnija stvar na svetu.\n\n\n\nJok.\nNije.\nKomarac je najdosadnija tvar na svetu.\n\n🖤💔🖤💔🖤💔\n\n\nČlanak nije dobar.\n\nBlokiraću te!\nTyžiću te!\n\nTi si komarax!",
      authorId: 1,
      createdAt: "2023-07-26T22:27:59.205Z",
      updatedAt: "2023-09-30T13:11:04.956Z",
      categories: [
        {
          name: "Biologija",
          article_category: {
            categoryId: 1,
            articleId: 2,
          },
        },
        {
          name: "Insekti",
          article_category: {
            categoryId: 5,
            articleId: 2,
          },
        },
        {
          name: "Životinje",
          article_category: {
            categoryId: 6,
            articleId: 2,
          },
        },
        {
          name: "Gamad",
          article_category: {
            categoryId: 8,
            articleId: 2,
          },
        },
      ],
    },
  ],
};

describe("Testing Loading component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Renders component", () => {
    render(
      <TestProvider store={store}>
        <Loading />
      </TestProvider>,
    );

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  test("Renders bubbles", () => {
    render(
      <TestProvider store={store}>
        <Loading />
      </TestProvider>,
    );

    const loading = screen.getByTestId("loading");
    expect(loading.querySelectorAll("div").length).toBe(4);
  });
});
