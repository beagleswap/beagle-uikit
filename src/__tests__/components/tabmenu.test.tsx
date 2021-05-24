import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { TabMenu, Tab } from "../../components/TabMenu";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <TabMenu activeIndex={0} onItemClick={handleClick}>
      <Tab>Item 1</Tab>
      <Tab>Item 2</Tab>
    </TabMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM sc-gtsrHT sc-dlnjwi dqfrjn bWfprX dNfixj"
      >
        <div
          class="sc-bdnxRM sc-gtsrHT sc-hKFxyN dzhrnT bWfprX dPcDkK"
        >
          <button
            class="sc-eCApnc bybIin"
            color="backgroundAlt"
            scale="md"
          >
            Item 1
          </button>
          <button
            class="sc-eCApnc ebkSEM"
            color="textSubtle"
            scale="md"
          >
            Item 2
          </button>
        </div>
      </div>
    </DocumentFragment>
  `);
});
