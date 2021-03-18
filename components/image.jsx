export const ImageLoader = ({ src, width, quality }) => {
  console.log(src);
  return `${src}?auto=format&fit=max&w${width}&q=${quality || 75}`;
};
