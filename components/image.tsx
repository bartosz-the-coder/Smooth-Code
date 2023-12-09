import type { ImageLoader } from 'next/image';

const SourceImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?auto=format&fit=max&w${width}&q=${quality || 75}`;
};

export default SourceImageLoader;
