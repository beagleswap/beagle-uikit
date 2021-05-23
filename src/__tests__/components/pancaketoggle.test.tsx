import React from "react";
import { renderWithTheme } from "../../testHelpers";
import PancakeToggle from "../../components/PancakeToggle/PancakeToggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<PancakeToggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM llNqlm"
        scale="md"
      >
        <input
          checked=""
          class="sc-gtsrHT bNNJfM"
          id="pancake-toggle"
          scale="md"
          type="checkbox"
        />
        <label
          class="sc-dlnjwi iZTSaF"
          for="pancake-toggle"
          scale="md"
        >
          <div
            class="pancakes"
          >
            <div
              class="pancake"
            />
            <div
              class="pancake"
            />
            <div
              class="pancake"
            />
            <div
              class="butter"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<PancakeToggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM digcXA"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gtsrHT iihDDM"
          id="pancake-toggle"
          scale="sm"
          type="checkbox"
        />
        <label
          class="sc-dlnjwi iqggeP"
          for="pancake-toggle"
          scale="sm"
        >
          <div
            class="pancakes"
          >
            <div
              class="pancake"
            />
            <div
              class="pancake"
            />
            <div
              class="pancake"
            />
            <div
              class="butter"
            />
          </div>
        </label>
      </div>
    </DocumentFragment>
  `);
});
