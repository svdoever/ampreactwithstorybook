'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
// var ReactInjection = require('react-dom/lib/ReactInjection');
// var DOMProperty$1 = require('react-dom/lib/DOMProperty');

var AmpScript = function AmpScript(_ref) {
  var src = _ref.src,
      customElement = _ref.customElement;
  return React__default.createElement('script', { async: true, 'custom-element': customElement, src: src });
};

AmpScript.defaultProps = {
  customElement: null
};

AmpScript.propTypes = {
  src: PropTypes.string.isRequired,
  customElement: PropTypes.string
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var CONTEXT_KEY = '__react-amphtml-ampscripts__';

var AmpScripts = function () {
  function AmpScripts() {
    classCallCheck(this, AmpScripts);
    this.scripts = new Map([[null, 'https://cdn.ampproject.org/v0.js']]);
  }

  createClass(AmpScripts, [{
    key: 'addComponent',
    value: function addComponent(component) {
      this.scripts.set(component, 'https://cdn.ampproject.org/v0/' + component + '-0.1.js');
    }
  }, {
    key: 'getScriptElements',
    value: function getScriptElements() {
      return [].concat(toConsumableArray(this.scripts)).map(function (_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            component = _ref2[0],
            script = _ref2[1];

        return React__default.createElement(AmpScript, { key: script, customElement: component, src: script });
      });
    }
  }]);
  return AmpScripts;
}();

var amphtml = { "builtins": ["amp-img", "amp-pixel"], "extensions": ["amp-3q-player", "amp-a4a", "amp-access", "amp-access-laterpay", "amp-accordion", "amp-ad", "amp-ad-exit", "amp-ad-network-adsense-impl", "amp-ad-network-cloudflare-impl", "amp-ad-network-doubleclick-impl", "amp-ad-network-fake-impl", "amp-ad-network-gmossp-impl", "amp-ad-network-triplelift-impl", "amp-analytics", "amp-anim", "amp-animation", "amp-apester-media", "amp-app-banner", "amp-audio", "amp-auto-ads", "amp-bind", "amp-brid-player", "amp-brightcove", "amp-call-tracking", "amp-carousel", "amp-compare-slider", "amp-crypto-polyfill", "amp-dailymotion", "amp-dynamic-css-classes", "amp-experiment", "amp-facebook", "amp-facebook-comments", "amp-facebook-like", "amp-fit-text", "amp-font", "amp-form", "amp-fresh", "amp-fx-flying-carpet", "amp-fx-parallax", "amp-gfycat", "amp-gist", "amp-google-vrview-image", "amp-hulu", "amp-iframe", "amp-ima-video", "amp-image-lightbox", "amp-imgur", "amp-instagram", "amp-install-serviceworker", "amp-izlesene", "amp-jwplayer", "amp-kaltura-player", "amp-lightbox", "amp-lightbox-viewer", "amp-list", "amp-live-list", "amp-mustache", "amp-nexxtv-player", "amp-o2-player", "amp-ooyala-player", "amp-pinterest", "amp-playbuzz", "amp-position-observer", "amp-reach-player", "amp-reddit", "amp-selector", "amp-share-tracking", "amp-sidebar", "amp-slides", "amp-social-share", "amp-soundcloud", "amp-springboard-player", "amp-sticky-ad", "amp-timeago", "amp-twitter", "amp-user-notification", "amp-video", "amp-viewer-integration", "amp-vimeo", "amp-vine", "amp-viz-vega", "amp-vk", "amp-web-push", "amp-youtube"] };

var builtins = amphtml.builtins;
var extensions = amphtml.extensions;


var getAmpComponent = function getAmpComponent(_ref) {
  var Component$$1 = _ref.Component,
      addComponentToAmpScripts = _ref.addComponentToAmpScripts;

  var AmpComponent = function AmpComponent(props, context) {
    if (addComponentToAmpScripts && context && context[CONTEXT_KEY] && typeof context[CONTEXT_KEY].addComponent === 'function') {
      context[CONTEXT_KEY].addComponent(Component$$1);
    }

    return React__default.createElement(Component$$1, props);
  };

  AmpComponent.contextTypes = defineProperty({}, CONTEXT_KEY, PropTypes.instanceOf(AmpScripts));

  return AmpComponent;
};

var capitalize = function capitalize(match, p1) {
  return p1.toUpperCase();
};

var ampComponentReducer = function ampComponentReducer(_ref2) {
  var addComponentToAmpScripts = _ref2.addComponentToAmpScripts;
  return function (allComponents, Component$$1) {
    var componentName = Component$$1.replace(/^amp-(.)/, capitalize).replace(/-(.)/g, capitalize);

    var AmpComponent = getAmpComponent({ Component: Component$$1, addComponentToAmpScripts: addComponentToAmpScripts });

    return _extends({}, allComponents, defineProperty({}, componentName, AmpComponent));
  };
};

var Amp = extensions.reduce(ampComponentReducer({ addComponentToAmpScripts: true }), builtins.reduce(ampComponentReducer({ addComponentToAmpScripts: false }), {}));

var AmpScriptsManager = function (_Component) {
  inherits(AmpScriptsManager, _Component);

  function AmpScriptsManager() {
    classCallCheck(this, AmpScriptsManager);
    return possibleConstructorReturn(this, (AmpScriptsManager.__proto__ || Object.getPrototypeOf(AmpScriptsManager)).apply(this, arguments));
  }

  createClass(AmpScriptsManager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return defineProperty({}, CONTEXT_KEY, this.props.ampScripts);
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.Children.only(this.props.children);
    }
  }]);
  return AmpScriptsManager;
}(React.Component);

AmpScriptsManager.childContextTypes = defineProperty({}, CONTEXT_KEY, PropTypes.instanceOf(AmpScripts).isRequired);

AmpScriptsManager.propTypes = {
  children: PropTypes.node.isRequired,
  ampScripts: PropTypes.instanceOf(AmpScripts).isRequired
};

/* eslint-disable react/no-danger */
var key = function key(suffix) {
  return 'react-amphtml-header-boilerplate-' + suffix;
};

var headerBoilerplate = (function (href) {
  return [React__default.createElement('meta', { key: key('meta-charset'), charSet: 'utf-8' }), React__default.createElement('meta', { key: key('meta-viewport'), name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' }), React__default.createElement('link', { key: key('canonical-link'), rel: 'canonical', href: href }), React__default.createElement('style', {
    key: key('style'),
    'amp-boilerplate': '',
    dangerouslySetInnerHTML: {
      __html: '\n          body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\n        '
    }
  }), React__default.createElement(
    'noscript',
    { key: key('noscript') },
    React__default.createElement('style', {
      'amp-boilerplate': '',
      dangerouslySetInnerHTML: {
        __html: '\n            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}\n          '
      }
    })
  )];
});

// // By default React limit the set of valid DOM elements and attributes
// // (https://github.com/facebook/react/issues/140) this config whitelist
// // Amp elements/attributes
// var whitelist = (function () {
//   if (typeof DOMProperty$1.properties.amp === 'undefined') {
//     ReactInjection.DOMProperty.injectDOMPropertyConfig({
//       Properties: { amp: ReactInjection.DOMProperty.MUST_USE_ATTRIBUTE },
//       isCustomAttribute: function isCustomAttribute(attributeName) {
//         return attributeName.startsWith('amp-');
//       }
//     });
//   }
//   if (typeof DOMProperty$1.properties.customElement === 'undefined') {
//     ReactInjection.DOMProperty.injectDOMPropertyConfig({
//       Properties: { customElement: ReactInjection.DOMProperty.MUST_USE_ATTRIBUTE },
//       isCustomAttribute: function isCustomAttribute(attributeName) {
//         return attributeName === 'custom-element';
//       }
//     });
//   }
// });

exports.Amp = Amp;
exports.AmpScript = AmpScript;
exports.AmpScripts = AmpScripts;
exports.AmpScriptsManager = AmpScriptsManager;
exports.headerBoilerplate = headerBoilerplate;
// exports.whitelist = whitelist;
//# sourceMappingURL=index.js.map
