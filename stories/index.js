import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {ImageWithHeading} from '../components/ImageWithHeading/ImageWithHeading.tsx';
import {Helmet} from 'react-helmet';
import {
  AmpScripts,
  AmpScriptsManager,
  headerBoilerplate
} from 'react-amphtml';
//import { StyleSheet } from 'styled-components';


const AmpDecorator = (storyFn) => {
  const ampScripts = new AmpScripts();
  var dummyDiv = document.createElement('div');
  ReactDOM.render(
    <div>
        <AmpScriptsManager ampScripts={ampScripts}>
          { storyFn() }
        </AmpScriptsManager>
    </div>,
    dummyDiv
  );

  let styles = require("!raw-loader!../styles/style.css");

  let scripts = [];

  [...ampScripts.scripts].map(
    ([component, script]) => {
      let attrs = { "src": script, "async": "" };
      if (!!component) { attrs["custom-element"] = component };
      scripts.push(attrs);
    }
  );

  return (
  <div>
    <Helmet script={scripts}>
      <style amp-custom="">{styles}</style>
    </Helmet>
    { storyFn() }
  </div>
  );
};

storiesOf('Button', module)
  .addDecorator(AmpDecorator)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
storiesOf('ImageWithHeading', module)
  .addDecorator(AmpDecorator)
  .add('with text', () => (
     <ImageWithHeading 
        src="/img/amp.jpg" 
        width={1280} 
        height={853} 
        alt='Beautiful Image of a rectangle' 
        heading='Views from OuterSpace and back!'/>
  ));

