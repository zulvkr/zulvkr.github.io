const env = process.env
const { format } = require('date-fns')
const { inspect } = require('util')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({
    'src/image/': 'image'
  })

  eleventyConfig.addFilter('toReadableDate', date =>
    format(date, 'MMMM do, yyyy')
  )

  eleventyConfig.addFilter('debug', content => `<pre>${inspect(content)}</pre>`)

  const configObject = {
    dir: {
      input: 'src'
    },
    htmlTemplateEngine: 'njk'
  }

  /**
   * Development only setting
   */

  if (env.NODE_ENV !== 'production') {
    eleventyConfig.addPassthroughCopy({
      'src/temp/main.css': 'main.css',
      'src/assets/red.css': 'red.css'
    })
  }

  /* Last line */
  return configObject
}
