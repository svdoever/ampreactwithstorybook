import * as React from 'react';
import { Amp } from 'react-amphtml';

const ImageWithHeading = ({src, width, height, alt = "", heading} : {src: string, width: number, height: number, alt?: string, heading?: string}) => (
    <figure className="ampstart-image-with-heading m0 relative mb4">
        <Amp.Img src={src} width={width} height={height} layout="responsive" alt={alt}></Amp.Img>
        <figcaption className="absolute right-0 bottom-0 left-0">
            <header className="ampstart-image-heading px2 py2 line-height-4">
            <h1>{heading}</h1>
            </header>
        </figcaption>
    </figure>
);

export default ImageWithHeading;