import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRoute } from "../../../setupTests";
import { Pagination } from "./index";

describe("Pagination tests", () => {
  test("Next `page` on the first page", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const nextButton = await screen.findByText(/Next/i);
    userEvent.click(nextButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("2");
  });

  test("Last `page` on the first page", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />);

    const lastButton = screen.getByText(/Last/i);
    userEvent.click(lastButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("10");
  });

  test("Previous `page` on the last page", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />, { route: "/?page=10" });

    const previousButton = screen.getByText(/Previous/i);
    userEvent.click(previousButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("9");
  });

  test("First `page` on the last page", async () => {
    renderWithRoute(<Pagination totalPageCount={10} />, { route: "/?page=10" });

    const firstButton = screen.getByText(/First/i);
    userEvent.click(firstButton);

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    expect(page).toBe("1");
  });
});
