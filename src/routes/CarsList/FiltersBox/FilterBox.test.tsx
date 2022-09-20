import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRoute } from "../../../setupTests";
import { FiltersBox } from "./index";

describe("Filters tests", () => {
  test("Changing `color` filters cars", async () => {
    const selectedColor = "red";

    renderWithRoute(<FiltersBox />);

    const colorSelect = await screen.findByLabelText(/Color/i);
    userEvent.selectOptions(colorSelect, selectedColor);

    const filterButton = screen.getByText(/Filter/i);
    userEvent.click(filterButton);

    const searchParams = new URLSearchParams(window.location.search);
    const color = searchParams.get("color");
    expect(color).toBe(selectedColor);
  });

  test("Changing `manufacturer` filters cars", async () => {
    const selectedManufacturer = "Fiat";

    renderWithRoute(<FiltersBox />);

    const manufacturerSelect = await screen.findByLabelText(/Manufacturer/i);
    userEvent.selectOptions(manufacturerSelect, selectedManufacturer);

    const filterButton = screen.getByText(/Filter/i);
    userEvent.click(filterButton);

    const searchParams = new URLSearchParams(window.location.search);
    const manufacturer = searchParams.get("manufacturer");
    expect(manufacturer).toBe(selectedManufacturer);
  });
});
