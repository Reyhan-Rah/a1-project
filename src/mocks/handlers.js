import { rest } from "msw";
import { baseURL } from "../consts";

const carsResponse = {
  cars: [
    {
      stockNumber: 1111,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 2222,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 3333,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 4444,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
  ],
  totalPageCount: 1,
  totalCarsCount: 4,
};

const singleCarResponse = {
  car: {
    stockNumber: 1111,
    manufacturerName: "Porsche",
    modelName: "924",
    mileage: {
      number: 100141,
      unit: "km",
    },
    fuelType: "Diesel",
    color: "white",
    pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
  },
};

const colorsResponse = {
  colors: ["red", "green", "blue"],
};

const manufacturersResponse = {
  manufacturers: [
    {
      name: "Fiat",
      models: [
        {
          name: "Marea",
        },
      ],
    },
    {
      name: "Ford",
      models: [
        {
          name: "Focus",
        },
      ],
    },
  ],
};

export const handlers = [
  rest.get(baseURL + "/api/cars", (req, res, ctx) => {
    return res(ctx.json(carsResponse));
  }),

  rest.get(baseURL + "/api/cars/:stockNumber", (req, res, ctx) => {
    return res(ctx.json(singleCarResponse));
  }),

  rest.get(baseURL + "/api/colors", (_, res, ctx) => {
    return res(ctx.json(colorsResponse));
  }),

  rest.get(baseURL + "/api/manufacturers", (_, res, ctx) => {
    return res(ctx.json(manufacturersResponse));
  }),
];
