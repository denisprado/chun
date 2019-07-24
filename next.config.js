const withFonts = require("next-fonts");
module.exports = withFonts({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
});
