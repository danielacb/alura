import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("Account component", () => {
  it("should display the account balance with R$", () => {
    render(<Conta saldo={1000} />);

    const balance = screen.getByTestId("saldo-conta");

    expect(balance.textContent).toBe("R$ 1000");
  });

  it("should make a transaction when the button is clicked", () => {
    const functionMakeATransaction = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={functionMakeATransaction} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(functionMakeATransaction).toHaveBeenCalled();
  });
});
