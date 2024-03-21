import React, { CSSProperties, ImgHTMLAttributes, RefObject } from "react";

export enum ImageType {
  WEBP = "image/webp",
  JPEG = "image/jpeg",
  PNG = "image/png",
  SVG = "image/svg+xml",
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  type: ImageType;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  ref?: RefObject<HTMLImageElement>; // Include ref in ImageProps
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  type,
  style,
  containerStyle,
  ref,
  ...props
}) => {
  return (
    <picture style={containerStyle}>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} style={style} ref={ref} {...props} />
    </picture>
  );
};

export default Image;
