import NextImage, { type ImageProps } from "next/image";
import { imagePreviews } from "@/lib/image-previews.generated";

/** Keep a recognisable local preview visible until the full image has loaded. */
export default function StableImage(props: ImageProps) {
  const preview = typeof props.src === "string" ? imagePreviews[props.src] : undefined;
  return (
    <NextImage
      {...props}
      {...(preview && !props.placeholder ? { placeholder: preview as ImageProps["placeholder"] } : {})}
    />
  );
}
