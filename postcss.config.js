const cssnano = require("cssnano");
const env = process.env;

module.exports = {
  plugins: [
    require("tailwindcss"),
    env.NODE_ENV === "production" ? require("autoprefixer") : null,
    env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null
  ]
};
