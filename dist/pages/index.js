"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const head_1 = require("next/head");
const react_amphtml_1 = require("react-amphtml");
const styled_components_1 = require("styled-components");
const ImageWithHeading_1 = require("../dist/components/ImageWithHeading");
const Container = styled_components_1.default.div `
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
`;
const StyledAmpImg = styled_components_1.default(react_amphtml_1.Amp.Img) `
  filter: ${(props) => {
    switch (props['data-filter']) {
        case 1:
            return 'blur(10px)';
        case 2:
            return 'hue-rotate(180deg)';
        case 3:
            return 'invert(100%)';
        case 4:
            return 'grayscale(100%)';
        case 5:
            return 'sepia(100%)';
        case 6:
            return 'saturate(100%)';
        default:
            return 'none';
    }
}};
`;
const defaultHeading = {
    text: 'Hello, World!',
};
exports.default = () => (react_1.default.createElement(Container, null,
    react_1.default.createElement(head_1.default, null,
        react_1.default.createElement("title", null, "ampreact | Hello, World!")),
    react_1.default.createElement(react_amphtml_1.Amp.State, { id: "heading" }, defaultHeading),
    react_1.default.createElement(react_amphtml_1.Amp.Bind, { text: "heading.text" },
        react_1.default.createElement("h1", null, defaultHeading.text)),
    react_1.default.createElement("p", null,
        react_1.default.createElement("label", { htmlFor: "headingInputElement" },
            react_1.default.createElement("p", null,
                react_1.default.createElement("b", null, "Type your heading:")),
            react_1.default.createElement(react_amphtml_1.Amp.State, { id: "headingInput" }, defaultHeading),
            react_1.default.createElement(react_amphtml_1.Amp.Action, { events: {
                    change: ['AMP.setState({ headingInput: { text: event.value } })'],
                } },
                react_1.default.createElement("input", { type: "text", id: "headingInputElement" }))),
        react_1.default.createElement(react_amphtml_1.Amp.Action, { events: {
                tap: ['AMP.setState({ heading: { text: headingInput.text } })'],
            } },
            react_1.default.createElement("button", null, "Set Heading"))),
    react_1.default.createElement("p", null,
        react_1.default.createElement(react_amphtml_1.Amp.Action, { events: {
                tap: ['awesome-carousel.toggleVisibility'],
            } },
            react_1.default.createElement("button", null, "Toggle Carousel Visibility"))),
    react_1.default.createElement(react_amphtml_1.Amp.Carousel, { id: "awesome-carousel", height: "610", layout: "fixed-height", type: "carousel" }, [...Array(6)].map((v, index) => (react_1.default.createElement(StyledAmpImg, { "data-filter": index, src: "/static/amp.jpg", width: "1080", height: "610", alt: "AMP" })))),
    react_1.default.createElement(react_amphtml_1.Amp.Accordion, null,
        react_1.default.createElement("section", { expanded: true },
            react_1.default.createElement("h4", null, "Section 1"),
            react_1.default.createElement("p", null, "Bunch of awesome content.")),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h4", null, "Section 2"),
            react_1.default.createElement("div", null,
                "Bunch of even more awesome content. This time in a",
                react_1.default.createElement("code", null, "<div>"),
                ".")),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h4", null, "Section 3"),
            react_1.default.createElement("figure", null,
                react_1.default.createElement(react_amphtml_1.Amp.Img, { src: "/static/amp.jpg", width: "1080", height: "610", layout: "responsive", alt: "an image" }),
                react_1.default.createElement("figcaption", null, "Images work as well.")))),
    react_1.default.createElement(ImageWithHeading_1.default, { src: '/static/amp.jpg', width: '1280', height: '853', alt: 'Beautiful Image of a rectangle', heading: 'Views from Space' })));
//# sourceMappingURL=index.js.map