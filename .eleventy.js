const env = process.env

module.exports = function (eleventyConfig) {
  if (env.NODE_ENV !== 'production') {
    eleventyConfig.addPassthroughCopy({
      'src/temp/main.css': 'main.css',
      'src/assets/red.css': 'red.css'
    })
  }
  eleventyConfig.addPassthroughCopy({
    'src/image/': 'image'
  })
  return {
    dir: {
      input: 'src'
    }
  }
}
