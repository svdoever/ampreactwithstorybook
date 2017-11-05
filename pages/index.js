"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const react_amphtml_1 = require("react-amphtml");
const styled_components_1 = require("styled-components");
const ImageWithHeading_1 = require("../components/ImageWithHeading/ImageWithHeading");
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
exports.default = () => (React.createElement(Container, null,
    React.createElement(head_1.default, null,
        React.createElement("title", null, "ampreact | Hello, World!")),
    React.createElement(react_amphtml_1.Amp.State, { id: "heading" }, defaultHeading),
    React.createElement(react_amphtml_1.Amp.Bind, { text: "heading.text" },
        React.createElement("h1", null, defaultHeading.text)),
    React.createElement("p", null,
        React.createElement("label", { htmlFor: "headingInputElement" },
            React.createElement("p", null,
                React.createElement("b", null, "Type your amazing heading:")),
            React.createElement(react_amphtml_1.Amp.State, { id: "headingInput" }, defaultHeading),
            React.createElement(react_amphtml_1.Amp.Action, { events: {
                    change: ['AMP.setState({ headingInput: { text: event.value } })'],
                } },
                React.createElement("input", { type: "text", id: "headingInputElement" }))),
        React.createElement(react_amphtml_1.Amp.Action, { events: {
                tap: ['AMP.setState({ heading: { text: headingInput.text } })'],
            } },
            React.createElement("button", null, "Set Heading"))),
    React.createElement("p", null,
        React.createElement(react_amphtml_1.Amp.Action, { events: {
                tap: ['awesome-carousel.toggleVisibility'],
            } },
            React.createElement("button", null, "Toggle Carousel Visibility"))),
    React.createElement(react_amphtml_1.Amp.Carousel, { id: "awesome-carousel", height: "610", layout: "fixed-height", type: "carousel" }, [...Array(6)].map((v, index) => (React.createElement(StyledAmpImg, { "data-filter": index, src: "/static/amp.jpg", width: "1080", height: "610", alt: "AMP" })))),
    React.createElement(react_amphtml_1.Amp.Accordion, null,
        React.createElement("section", { expanded: "yes" },
            React.createElement("h4", null, "Section 1"),
            React.createElement("p", null, "Bunch of awesome content.")),
        React.createElement("section", null,
            React.createElement("h4", null, "Section 2"),
            React.createElement("div", null,
                "Bunch of even more awesome content. This time in a",
                React.createElement("code", null, "<div>"),
                ".")),
        React.createElement("section", null,
            React.createElement("h4", null, "Section 3"),
            React.createElement("figure", null,
                React.createElement(react_amphtml_1.Amp.Img, { src: "/static/amp.jpg", width: "1080", height: "610", layout: "responsive", alt: "an image" }),
                React.createElement("figcaption", null, "Images work as well.")))),
    React.createElement(ImageWithHeading_1.default, { src: '/static/amp.jpg', width: '200', height: '100', alt: 'Beautiful Image of a rectangle', heading: 'Views from Space' })));
//# sourceMappingURL=index.js.map