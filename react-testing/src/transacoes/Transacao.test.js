import { render } from "@testing-library/react";
import React from "react";
import Transacao from "./Transacao";

describe("Transaction component", () => {
  it("should always match the snapshot", () => {
    const { container } = render(
      <Transacao data="08/03/2021" tipo="saque" valor="20.00" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
