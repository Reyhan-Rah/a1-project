import { screen } from "@testing-library/react";
import { renderWithRoute } from "../../../setupTests";
import { Card } from "./index";

describe("Card tests", () => {
  test("View details link", async () => {
    const stockNumber = 1111;

    renderWithRoute(
      <Card
        stockNumber={stockNumber}
        manufacturerName={"Fiat"}
        modelName={"Marea"}
        mileage={{ number: 100141, unit: "km" }}
        fuelType={"Diesel"}
        color={"white"}
        pictureUrl={
          "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
        }
      />
    );

    const link = screen.getByText(/View details/i);
    expect(link.getAttribute("href")).toBe(`/${stockNumber}`);
  });
});
