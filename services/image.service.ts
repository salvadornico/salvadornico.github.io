export enum ImageSize {
  Regular = "reg",
  Thumb = "thumb",
}

export type ImagePathOptions = {
  file: string;
  path?: string;
  sizeType?: ImageSize;
};

export const getUrl = (options: ImagePathOptions): string => {
  const urls = {
    reg: "https://res.cloudinary.com/salvadornico/image/upload/v1529327218/Portfolio",
    thumb:
      "https://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio",
  };

  const getPath = (file: string, path = ""): string =>
    path ? `/${path}/${file}` : `/${file}`;

  const sizeType = options.sizeType ?? ImageSize.Regular;

  return urls[sizeType] + getPath(options.file, options.path);
};
