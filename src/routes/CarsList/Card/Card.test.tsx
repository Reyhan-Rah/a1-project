import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRoute } from "../../../setupTests";
import { Card } from "./index";

describe("Card tests", () => {
  test("View details link", async () => {
    renderWithRoute(
      <Card
        stockNumber={1111}
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

    const detailsButton = screen.getByText(/View Details/i);
    userEvent.click(detailsButton);

    // const details = await screen.findByText(/This car is currently available/i);
    // expect(details).toBeInTheDocument();
  });
});
