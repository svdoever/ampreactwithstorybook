"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@storybook/react");
const addon_actions_1 = require("@storybook/addon-actions");
const ImageWithHeading_1 = require("../components/ImageWithHeading");
const amp_jpg_1 = require("./amp.jpg");
react_2.storiesOf('Button', module)
    .add('with text', () => (react_1.default.createElement("button", { onClick: addon_actions_1.action('clicked') }, "Hello Button")))
    .add('with some emoji', () => (react_1.default.createElement("button", { onClick: addon_actions_1.action('clicked') }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")));
react_2.storiesOf('ImageWithHeading', module)
    .add('with text', () => (react_1.default.createElement(ImageWithHeading_1.default, { src: amp_jpg_1.default, width: '1280', height: '853', alt: 'Beautiful Image of a rectangle', heading: 'Views from Space' })));
//# sourceMappingURL=index.js.map