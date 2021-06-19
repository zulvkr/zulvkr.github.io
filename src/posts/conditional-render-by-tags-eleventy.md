---
layout: blog.html
title: Conditional Render by Tags in Eleventy
description: How to render item conditionally based on tags in Eleventy using Nunjucks
date: 2021-06-17
tags:
  - post
  - eleventy
  - nunjucks
  - javascript
---

Nunjucks are funny templating language. It seems to have a lot of unusual behavior that doesn't match with JavaScript syntax. Maybe because it's inspired by Jinja 2 that makes it has some Python characteristics.

Recently I was trying to find a clean way to render items conditionally based on availabililty of tags and met a stumble block. At first, I tried to make custom filter like this:

```nunjucks
eleventyConfig.addFilter('includesPost', arr => arr.includes('post'))
```

The custom filter supposed to check if `tags` of a post includes `post` tag as its member. Tags are array in Eleventy so I expected a smooth journey, but things go awry in the console. Eleventy crashed when rendering root `/index.html` file.

After careful inspection on the rendering error, I realized that the filter always trying to iterate over uniterable item before crashing.

This makes me utterly confused, how could that be possible? Is it possible that tags didn't always return array but stringified value?

One trick I managed to learn is to print the value of objects using built-in Nunjucks `dump()` filter. It turned out that `tags` is array as expected.

```nunjucks
{%- raw -%}
{{ tags | dump(2) }}
{%- endraw %}
{# it prints ['tag1', 'post'] just fine #}
```

Some testing and an hour of debugging later, the culprit was found! Not every post in Eleventy has `tags` as property, which makes caling `tags` key will return `undefined` when reaching some pages. Wild `undefined` tags consistently appeared in any posts that has no tags assigned in their frontmatter.

So, I need to prevent `tags` being iterated when `tags` is `undefined`:

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif (tags | includesPost) %}
  render something
{% endif %}
{%- endraw -%}
```

Well, some Googling later I found a gem! See the second line.

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif 'post' in tags %}
  render something
{% endif %}
{%- endraw -%}
```

The code above is my latest solution. The `in` syntax works similarly as `arr.includes()` in JavaScript. This syntax is borrowed from Python and not available in the Nunjucks documentation. So you have to have some familiarity with Python and Jinja to know it. Ugh, what a painful way to learn!

The `.includes()` method surprisingly also works inline in Nunjucks.

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif tags.includes('post') %}
  render something
{% endif %}
{%- endraw -%}
```

Does all array methods work in Nunjucks? I don't even find this notion in the documentation, or is it obscured somewhere? I hope the ability to use built-in JavaScript object methods is written in prominent way in Nunjucks documentation. It's a game changer.

Anyway, both solutions are amazing for my use case! I ditched my custom filter and used these semantic syntax for this blog. Lots of thanks to Ryuno-ki who pointed [this out in this thread][1] and all folks who contributed to that thread.

[1]: https://github.com/11ty/eleventy/issues/524
