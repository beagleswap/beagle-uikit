import React from "react";
import { renderWithTheme } from "../../testHelpers";
import NotificationDot from "../../components/NotificationDot/NotificationDot";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <NotificationDot>
      <div />
    </NotificationDot>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="sc-bdnxRM fBWeiF"
      >
        <div />
        <span
          class="sc-gtsrHT cqVpQD"
        />
      </span>
    </DocumentFragment>
  `);
});
