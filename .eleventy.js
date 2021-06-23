const env = process.env
const { format } = require('date-fns')
const { inspect } = require('util')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = config => {
  config.addPassthroughCopy({
    'src/image/': 'image'
  })

  config.addFilter('toReadableDate', date =>
    format(date, 'MMMM do, yyyy')
  )

  config.addFilter('debug', content => `<pre>${inspect(content)}</pre>`)

  config.addPlugin(eleventyNavigationPlugin)

  config.setUseGitIgnore(false);

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
    config.addPassthroughCopy({
      'src/temp/main.css': 'main.css',
      'src/assets/red.css': 'red.css'
    })
  }

  /* Last line */
  return configObject
}
