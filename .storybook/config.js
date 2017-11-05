import { configure } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: '⚡AMP ⚛React',
  downPanelInRight: false
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);