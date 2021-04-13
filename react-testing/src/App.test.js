import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

      it("should make the withdraw transaction", () => {
        const { getByText, getByTestId, getByLabelText } = render(<App />);
        const balance = getByText("R$ 1000");
        const transaction = getByLabelText("Saque");
        const amount = getByTestId("valor");
        const transactionButton = getByText("Realizar operação");

        expect(balance.textContent).toBe("R$ 1000");

        fireEvent.click(transaction, { target: { amount: "Saque" } });
        fireEvent.change(amount, { target: { value: 10 } });
        fireEvent.click(transactionButton);

        expect(balance.textContent).toBe("R$ 990");
      });
    });
  });
});
