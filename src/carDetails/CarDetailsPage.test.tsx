import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithRoute } from "../setupTests";

describe("CarDetailsPage", () => {
  test("renders page heading", async () => {
    renderWithRoute(<App />, { route: "/10099" });
    const heading = await screen.findByText(/Porsche/i);
    expect(heading).toBeInTheDocument();
  });
});
