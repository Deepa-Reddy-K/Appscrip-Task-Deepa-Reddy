import { FC, CSSProperties, ImgHTMLAttributes } from "react";

export enum ImageType {
  WEBP = "image/webp",
  JPEG = "image/jpeg",
  PNG = "image/png",
  SVG = "image/svg+xml",
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  type: ImageType;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  type,
  style,
  containerStyle,
  ...props
}) => {
  return (
    <picture style={containerStyle}>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} style={style} {...props} />
    </picture>
  );
};

export default Image;
