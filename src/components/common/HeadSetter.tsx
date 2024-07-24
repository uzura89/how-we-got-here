import { Fragment } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function HeadSetter({ title, description, image, url }: Props) {
  return (
    <Fragment>
      {/* Page Descriptions */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Fragment>
  );
}
