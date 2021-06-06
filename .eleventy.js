const env = process.env

module.exports = function (eleventyConfig) {
  if (env.NODE_ENV !== 'production') {
    eleventyConfig.addPassthroughCopy({ 'src/temp/main.css': 'main.css' })
  }
  return {
    dir: {
      input: 'src'
    }
  }
}
