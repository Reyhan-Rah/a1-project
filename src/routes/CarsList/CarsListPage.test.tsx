import { screen } from "@testing-library/react";
import App from "../../App";
import { renderWithRoute } from "../../setupTests";

describe("CarsListPage", () => {
  test("renders page heading", async () => {
    renderWithRoute(<App />, { route: "/" });
    const heading = await screen.findByText(/showing 4 of 4/i);
    expect(heading).toBeInTheDocument();
  });
});
