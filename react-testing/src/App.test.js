import React from "react";
import { render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./app";

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

  describe("When I make a transation", () => {
    describe("When make a deposit", () => {
      it("should add money to the account balance", () => {
        const transaction = {
          transacao: "saque",
          valor: 50,
        };

        const newBalance = calcularNovoSaldo(transaction, 150);

        expect(newBalance).toBe(100);
      });
    });

    describe("When I withdraw money", () => {
      it("should subtract money from the account balance", () => {
        const transaction = {
          transacao: "deposito",
          valor: 50,
        };

        const newBalance = calcularNovoSaldo(transaction, 150);

        expect(newBalance).toBe(200);
      });
    });
  });
});
