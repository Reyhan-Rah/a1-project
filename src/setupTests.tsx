import "@testing-library/jest-dom/extend-expect";

import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <Router>{children} </Router>
  </QueryClientProvider>
);

export const renderWithRoute = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper"> & { route: string }
) => {
  const route = options?.route ?? "/";
  window.history.pushState({}, `${route} page`, route);

  return render(ui, { wrapper: Providers, ...options });
};
