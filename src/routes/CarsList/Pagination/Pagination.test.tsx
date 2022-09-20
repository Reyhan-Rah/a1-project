import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRoute } from "../../../setupTests";
import { Pagination } from "./index";

describe("Pagination tests", () => {
  test("Next `page`", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const nextButton = screen.getByText(/Next/i);
    userEvent.click(nextButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("2");
  });

  test("Last `page`", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const lastButton = screen.getByText(/Last/i);
    userEvent.click(lastButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("10");
  });

  test("Previous `page`", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const previousButton = screen.getByText(/Previous/i);
    userEvent.click(previousButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe(null);
  });

  test("First `page`", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const firstButton = screen.getByText(/First/i);
    userEvent.click(firstButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("1");
  });
});
