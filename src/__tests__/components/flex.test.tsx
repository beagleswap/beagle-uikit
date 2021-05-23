import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Flex from "../../components/Box/Flex";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Flex>flex</Flex>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-gtsrHT dzhrnT bWfprX"
      >
        flex
      </div>
    </DocumentFragment>
  `);
});
