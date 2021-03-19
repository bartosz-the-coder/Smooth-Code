const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const config = Object.assign({}, defaultConfig, {
    trailingSlash: true
  });

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
