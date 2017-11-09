import * as React from 'react';
import Head from 'next/head';
import { Amp } from 'react-amphtml';
import styled from 'styled-components';
import {ImageWithHeading} from '../components/ImageWithHeading/ImageWithHeading';

declare module 'react' {
  interface HTMLAttributes<T> {
     expanded? : any;
  }
}

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const StyledAmpImg = styled(Amp.Img)`
  filter: ${(props: any) => {
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

export default () => (
  <Container>
    <Head>
      <title>ampreact | Hello, World!</title>
    </Head>

    <Amp.State id="heading">{defaultHeading}</Amp.State>
    <Amp.Bind text="heading.text">
      <h1>{defaultHeading.text}</h1>
    </Amp.Bind>


    <p>
      <label htmlFor="headingInputElement">
        <p><b>Type your amazing heading:</b></p>
        <Amp.State id="headingInput">{defaultHeading}</Amp.State>
        <Amp.Action
          events={{
            change: ['AMP.setState({ headingInput: { text: event.value } })'],
          }}
        >
          <input type="text" id="headingInputElement" />
        </Amp.Action>
      </label>
      <Amp.Action
        events={{
          tap: ['AMP.setState({ heading: { text: headingInput.text } })'],
        }}
      >
        <button>Set Heading</button>
      </Amp.Action>
    </p>

    <p>
      <Amp.Action
        events={{
          tap: ['awesome-carousel.toggleVisibility'],
        }}
      >
        <button>Toggle Carousel Visibility</button>
      </Amp.Action>
    </p>

    <Amp.Carousel
      id="awesome-carousel"
      height="610"
      layout="fixed-height"
      type="carousel"
    >
      {[...Array(6)].map((v, index) => (
        <StyledAmpImg
          data-filter={index}
          src="/static/img/amp.jpg"
          width={1080}
          height={610}
          alt="AMP"
        />
      ))}
    </Amp.Carousel>
    <Amp.Accordion>
      <section expanded> 
        <h4>Section 1</h4>
        <p>Bunch of awesome content.</p>
      </section>
      <section>
        <h4>Section 2</h4>
        <div>Bunch of even more awesome content. This time in a
          <code>&lt;div&gt;</code>.</div>
      </section>
      <section>
        <h4>Section 3</h4>
        <figure>
          <Amp.Img 
            src="/static/img/amp.jpg"
            width={1080}
            height={610}
            layout="responsive"
            alt="an image"></Amp.Img>
          <figcaption>Images work as well.</figcaption>
        </figure>
      </section>
    </Amp.Accordion>
    <ImageWithHeading src='/static/img/amp.jpg' width={200} height={100} alt='Beautiful Image of a rectangle' heading='Views from Space'/>
  </Container> 

);
