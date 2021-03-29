import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./app";

describe("App component", () => {
  describe("When I open the app", () => {
    it("should display the bank name", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("should display the account balance", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("should display the transaction action button", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
});
