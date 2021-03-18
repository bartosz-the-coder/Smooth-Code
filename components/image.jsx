export const ImageLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w${width}&q=${quality || 75}`;
};
