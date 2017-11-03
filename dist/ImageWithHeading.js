"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_amphtml_1 = require("react-amphtml");
const ImageWithHeading = ({ src, width, height, alt, heading }) => (React.createElement("figure", { className: "ampstart-image-with-heading m0 relative mb4" },
    React.createElement(react_amphtml_1.Amp.Img, { src: src, width: width, height: height, layout: "responsive", alt: alt }),
    React.createElement("figcaption", { className: "absolute right-0 bottom-0 left-0" },
        React.createElement("header", { className: "ampstart-image-heading px2 py2 line-height-4" },
            React.createElement("h1", null, heading)))));
exports.default = ImageWithHeading;
//# sourceMappingURL=ImageWithHeading.js.map