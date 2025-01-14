import * as React from "react";
import addons, { types } from "@storybook/addons";

import { ADDON_ID } from "./constants";

import { Tool } from "./components/Tool";

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: ADDON_ID,
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Tool />
  });
});
