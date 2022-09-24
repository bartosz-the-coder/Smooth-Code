const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * 
 * @param {string} phase 
 * @param {import('next').NextConfig} nextConfig 
 * @returns {import('next').NextConfig}
 */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      trailingSlash: true
    };
  }

  return {
    trailingSlash: true,
    images: {
      loader: "cloudinary",
      path: "/",
    },
  };
};
