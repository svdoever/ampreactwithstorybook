import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageWithHeading from '../components/ImageWithHeading/ImageWithHeading';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
storiesOf('ImageWithHeading', module)
  .add('with text', () => (
     <ImageWithHeading 
        src="/img/amp.jpg" 
        width={1280} 
        height={853} 
        alt='Beautiful Image of a rectangle' 
        heading='Views from OuterSpace and back'/>
  ));

