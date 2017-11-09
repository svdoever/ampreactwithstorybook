import * as React from 'react';
import { Amp } from 'react-amphtml';
import styled from 'styled-components';

declare module 'react' {
    interface HTMLAttributes<T> {
        expanded? : any;
    }
}

const Button = styled.button`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: palevioletred;
border: 2px solid palevioletred;
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

export const ImageWithHeading = ({src, width, height, alt = "", heading = ""} : {src: string, width: number, height: number, alt?: string, heading?: string}) => (
    <div>
        <figure className="ampstart-image-with-heading m0 relative mb4">
            <StyledAmpImg data-filter={5} src={src} width={width} height={height} layout="responsive" alt={alt}></StyledAmpImg>
            <figcaption className="absolute right-0 bottom-0 left-0">
                <header className="ampstart-image-heading px2 py2 line-height-4">
                <h1>{heading}</h1>
                </header>
            </figcaption>
        </figure>
        <Amp.Accordion>
            <section expanded> 
                <h4>Section 1</h4>
                <Button>I'm a magic button!</Button>
            </section>
            <section>
                <h4>Section 2</h4>
                <div>Bunch of even more awesome content. This time in a
                    <code>&lt;div&gt;</code>.</div>
            </section>
            <section>
                <h4>Section 3</h4>
                <p>More awesome content!!</p>
            </section>
        </Amp.Accordion>
  </div>
);