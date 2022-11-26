import { JSX } from "preact";

export enum ImageSize {
  Regular = "reg",
  Thumb = "thumb",
}

interface ImagePathOptions extends JSX.HTMLAttributes<HTMLImageElement> {
  file: string;
  path?: string;
  sizeType?: ImageSize;
}

export function Image(props: ImagePathOptions) {
  const getUrl = (size: ImageSize = ImageSize.Regular): string => {
    const urls = {
      reg:
        "https://res.cloudinary.com/salvadornico/image/upload/v1529327218/Portfolio",
      thumb:
        "https://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio",
    };

    const getPath = (file: string, path = ""): string =>
      path ? `/${path}/${file}` : `/${file}`;

    return urls[size] + getPath(props.file, props.path);
  };

  return (
    <img
      {...props}
      src={getUrl(props.sizeType)}
    />
  );
}
