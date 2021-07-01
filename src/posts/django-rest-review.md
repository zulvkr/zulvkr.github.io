---
layout: blog.html
title: Learning Django as JavaScript Developer
description: I learned Django, specifically Django Rest Framework with minuscle level of Python experience. Here are my 2 cents.
date: 2021-07-01
tags:
  - post
  - Python
  - Django
  - Django Rest Framework
  - stub
---

I've been looking around for better backend than JavaScript Jungle Land. Currently there are too many budding technologies to try in backend JavaScript, which fully supported by Typescript hype train. Many frameworks are trying to mimic RoR philosophy, while failing due to excesssice churn of best tools that keep come and go.

I was trying to extricate myself from that and went to Python which has better stability and known as a solid backend language. They have amazing tools too, battery included Django, micro framework flask, and their newer async cousin FastAPI. Backend have never been better in Python, so let's hop on the back of this snake.

So, as told by people of the net, I learned Django first, which is more opinionated and taught you how to follow convention, and it's not easy. First thing I figured out to be confusing is the virtual env and folder structure.

## What is virtual env?

Virtual environment is way to localize Python package installation. The default way to install Python package is global installation. Virtual environment let you install packages in local folder so you don't mess up your global Python.

Python has standard library for this called `venv`. But before `venv` was available, many third party packages have been available and dominating. Some of them are `virtualenv`, `pipenv` which used a lot by tutorial and may lead you to confusion.

Generally, just stick with `venv`. Ah yes, your console and VSCode don't automatically use the locally installed Python env. You need to specify it using `source` in console and "Select Interpreter" in VSCode.

## How is Django structured

Django folder structure, and Python packages in general look alien to me. So when I was following a tutorial and I missed a `.` during creating the Django project. That meant, I created a new folder to contain my new project instead of using current folder. That error alone made me messing around with several tutorial to finally figure out that missing `.`

## Django tutorial is confusing

I've been playing around with Laravel before and everything felt so magical and in place. Things were just work. Coupled with amazing tutorial on the internet and matured situation of PHP as language of the web, Laravel is undoubtably the most supportive, easiest framework I've ever felt. Despite that I steel feel uncomfortable with ORM Eloquent. The magic behind migration and modeling database still felt surreal to me. I hope I could get better at this.

Back to Django, It sure has the same spirit with Laravel, but the onboarding has been unpleasant due to python3 vs python2, virtualenv. By the way Django has less magic built I think, at least on the frontend part. The modelling and ORM felt oddly similar with Laravel, since they were both based on active record. The API of Tutorial were all documented but scattered everywhere ithe docs, or maybe it just my unfamiliarity.

-- to be continued
