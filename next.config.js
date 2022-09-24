const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * 
 * @param {string} phase 
 * @returns {import('next').NextConfig}
 */
module.exports = (phase) => {

  /**
   * @type {import('next').NextConfig}
   */
  const config =  {
    trailingSlash: true,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return config;
  }

  return {
    ...config,
    images: {
      loader: "cloudinary",
      path: "/",
    },
  };
};
