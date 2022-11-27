import { JSX } from "preact";
import { getUrl, ImagePathOptions } from "../services/image.service.ts";

export function Image(
  props: JSX.HTMLAttributes<HTMLImageElement> & ImagePathOptions,
) {
  return (
    <img
      {...props}
      src={getUrl(props)}
      loading="lazy"
    />
  );
}
