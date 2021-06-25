---
layout: blog.html
title: How to deploy Eleventy to GitHub Pages
description: How to Setup GitHub Pages for Eleventy without SSH setup using GitHub Token. Any other Node.js SSG work as well.
date: 2021-06-20
tags:
  - post
  - GitHub Pages
  - Eleventy
  - GitHub Action
---

Setting up a GitHub action for a static site generator surprisingly easy without any hassle. GitHub action supports various language and they posted lots of boilerplate configuration for a whole bunch of SSG. You can check the official tutorial [here][1].

There is no official boilerplate for eleventy, but the configuration is easy to learn.

## Configuration

```yaml
name: github pages

on:
  push:
    branches:
      - main
  pull_request:
      
jobs:
  deploy:
    runs-on: ubuntu-18.04 
    steps:
        - uses: actions/checkout@v2

        - name: Setup Node
          uses: actions/setup-node@v2
          with:
            node-version: '14'

        - name: Cache dependencies
          uses: actions/cache@v2
          with:
            path: ~/.npm
            key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
            restore-keys: |
              ${{ runner.os }}-node-

        - run: npm ci
        - run: npm run build # Your build script in package.json

        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          if: github.ref == 'refs/heads/main'
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./_site # Your eleventy output folder
```

This configuration is adapted from official tutorial and [lea-tortay post][2]. You just have to save it and in `.github/workflows/gh-pages.yml`. Replace commented part with your own build script and output folder.

You may want to add `.nojekyll` file to your root folder for fail-safe.

## What this configuration will do

This configuration will tell GitHub to run `npm run build` every time you push to main branch. `GITHUB_TOKEN` will work without any SSH configuration with small caveats: you have to configure GitHub Pages to use `gh-pages` branch as its source.

`gh-pages` branch will be created automatically after first deployment, so you have to change it after first deploy. You can check the detail in [the official tutorial here][3].

The official tutorial said GitHub Pages action will add `.nojekyll` automatically so you don't have to add them yourself.

GitHub Pages action also support scheduled action, pretty cool.



[1]: https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs

[2]: https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/

[3]: https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-first-deployment-with-github_token