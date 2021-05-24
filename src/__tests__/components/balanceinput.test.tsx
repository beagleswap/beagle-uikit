import React from "react";
import { renderWithTheme } from "../../testHelpers";
import BalanceInput from "../../components/BalanceInput/BalanceInput";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<BalanceInput value="14" currencyValue="15 USD" onUserInput={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gtsrHT sc-hKFxyN krFeZe iAfeHA"
      >
        <input
          class="sc-dlnjwi sc-eCApnc etIkrP iPiHro"
          inputmode="decimal"
          min="0"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder="0.0"
          scale="md"
          value="14"
        />
        <div
          class="sc-bdnxRM zMOCr"
          color="textSubtle"
          font-size="12px"
        >
          15 USD
        </div>
      </div>
    </DocumentFragment>
  `);
});
