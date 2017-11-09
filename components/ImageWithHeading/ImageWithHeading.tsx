import * as React from 'react';
import { Amp } from 'react-amphtml';

declare module 'react' {
    interface HTMLAttributes<T> {
        expanded? : boolean;
    }
}

const ImageWithHeading = ({src, width, height, alt = "", heading = ""} : {src: string, width: number, height: number, alt?: string, heading?: string}) => (
    <div>
        <figure className="ampstart-image-with-heading m0 relative mb4">
            <Amp.Img src={src} width={width} height={height} layout="responsive" alt={alt}></Amp.Img>
            <figcaption className="absolute right-0 bottom-0 left-0">
                <header className="ampstart-image-heading px2 py2 line-height-4">
                <h1>{heading}</h1>
                </header>
            </figcaption>
        </figure>
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
                <p>More awesome content!!</p>
            </section>
        </Amp.Accordion>
  </div>
);

export default ImageWithHeading;