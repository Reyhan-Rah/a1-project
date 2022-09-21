import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithRoute } from "../../setupTests";

describe("CarDetailsPage", () => {
  test("renders page heading", async () => {
    renderWithRoute(<App />, { route: "/10099" });
    const heading = await screen.findByText(/Porsche/i);
    expect(heading).toBeInTheDocument();
  });

  test("should add the car to favourites when button is clicked", async () => {
    renderWithRoute(<App />, { route: "/10099" });
    const saveButton = await screen.findByRole("button", { name: "Save" });
    fireEvent.click(saveButton);

    const deleteButton = await screen.findByRole("button", { name: "Delete" });

    expect(deleteButton).toBeInTheDocument();
  });

  test("should remove the car from favourites when button is clicked", async () => {
    renderWithRoute(<App />, { route: "/10099" });
    const deleteButton = await screen.findByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);

    const saveButton = await screen.findByRole("button", { name: "Save" });
    expect(saveButton).toBeInTheDocument();
  });
});
