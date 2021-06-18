---
layout: blog.html
title: Conditional Render by Tags in Eleventy
description: How to Render Item Conditionally According to Tags in Eleventy - Nunjucks
date: 2021-06-17
tags:
  - post
  - eleventy
  - nunjucks
  - javascript
---

Nunjucks are funny templating language. It seems to have a lot of unusual behavior that doesn't match with JavaScript syntax and not documented well. Maybe because it is inspired by Jinja 2 that makes it absorbed some Python characteristics.

Recently I'm trying to find a clean way to render items conditionally according to tags and met some stumble blocks. At first I tried to make custom filter like this:

```nunjucks
eleventyConfig.addFilter('includesPost', arr => arr.includes('post'))
```

It supposed to check if `tags` of a post includes `post` tag as its member. Tags are always array in Eleventy so I expected a smooth journey, but things go awry. After careful inspection on the rendering error (which I find it hard to examine), I realized that the filter always trying to iterate over uniterable item before crashing.

This makes me utterly confused, how could that be possible?

Some testing and an hour of debugging later, the culprit was found! Not every post in Eleventy has `tags` as property, which makes caling `tags` property will return `undefined` when reaching some pages. Wild `undefined` tags consistently appear in any posts that has no tags assigned in their frontmatter.

So, I need to prevent `tags` being iterated when `tags` is `undefined`:

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif (tags | includesPost) %}
  render something
{% endif %}
{%- endraw -%}
```

Well, some Googling makes me found a gem! See the second line.

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif 'post' in tags %}
  render something
{% endif %}
{%- endraw -%}
```

The code above is my latest solution. `in` works similarly as `arr.includes()` in JavaScript. The `in` syntax is borrowed from Python and not available in the Nunjucks documentation. You have to have some familiarity with Python and Jinja to know it. Ugh, what a painful way to learn!

The `includes()` method also works inline in Nunjucks.

```nunjucks
{%- raw -%}
{% if not tags %}
{% elif tags.includes('post') %}
  render something
{% endif %}
{%- endraw -%}
```

Does all array methods work in Nunjucks? I don't even find this notion in the documentation, or is it obscured somewhere? I hope the ability to use built-in JavaScript object methods written in prominent way in Nunjucks documentations. It's a game changer.

Anyway, both solutions are amazing for my use case! I can ditch my custom filter and use these semantic syntax. Lots of thanks to Ryuno-ki who pointed [this out in this thread][1] and all folks who contributed to that thread.

[1]: https://github.com/11ty/eleventy/issues/524
