---
layout: blog.html
title: Learning Django as JavaScript Developer
description: I just learned Django, specifically Django Rest Framework. I also made comparison with Laravel. Here are my 2 cents.
date: 2021-07-01
tags:
  - post
  - Python
  - Django Rest Framework
  - Laravel
---

I've been looking around for a better backend solution. In JavaScript jungle land, currently there are too many budding technologies to try. A situation that exacerbated by the TypeScript hype train.

In order to extricate myself from that, I went to Python. Python has better stability and is known as a solid backend language. It has amazing tools too: battery-included Django, micro-framework Flask, and their newer async cousin FastAPI. Backend has never been better in Python, so let's hop on the back of this snake.

So, as told by people on the internet, I learned Django first, which is a more opinionated framework that follows convention.

I tell you it's not easy. It's difficult to start learning Django compared to Flask. Django is colossal, and the first thing I figured out to be confusing is the virtual env and folder structure.

## What is virtual env?

Virtual environment is a way to localize Python package installation. The default way to install Python package is global installation. Virtual environment let you install packages in a local folder so you don't mess up your global Python.

Python has standard library to manage virtual environment called `venv`. But before `venv` was available, many third party packages already used by people. Some of them are `virtualenv` and `pipenv` which used a lot by python gurus 1-2 years ago. Generally, just stick with `venv` to follow the convention.

Ah yes, unlike how `package.json` works. Your console and VSCode may not automatically used the locally installed Python env. You need to specify it using `source` in the console or "Select Interpreter" in VSCode.

## How is Django structured?

Django folder structure and Python packages in general look alien to me. There is a stupid moment when I didn't put `.` when running `startproject` and got confused for an hour due to wrong folder structure.

Django has two start commands, `startproject` and `startapp`. Laravel only has one app folder, but Django can have many of them. So why do I want so many models and templates files separated in different folders? What is App?

I like this quote from [The Django Book](https://djangobook.com/mdj2-django-structure/):

> Stating up front that Django is an MVC framework gets one of two responses:
>
> 1. Beginners say “What the heck is MVC? _groan_. Guess that’s one more fricking thing I have to learn!”
> 2. More experienced programmers say “Aha! It’s just like Framework X.”
>
> In both cases, they’re almost entirely wrong.

Well, there is no consensus on how the project is structured. A simple project may only need a single app. You can put everything into one big folder, or separate some part of the project in a few apps. To go even further, an app can be made into a modular standalone Python package.

## Django official tutorial is confusing.

I had been playing around with Laravel before and everything felt so magical and in place. Things are just work. Coupled with amazing tutorials on the internet and the matured situation of PHP as a language of the web, Laravel is undoubtedly the most supportive, easiest framework I've ever felt.

Back to Django, it sure has the same spirit as Laravel, but my onboarding has been unpleasant due to python3 vs python2, virtualenv, and other python issues.

Maybe I'm biased, I have Homestead already set up before trying Laravel so it's a breeze to try.

The official tutorial in Django is easy to follow but hard to understand. It consists of seven steps, with each step I get to know more Django magic that I don't need for a REST API. So I stopped when I met the templating step.

If you are like me, you should not bother with the official tutorial.

Start with [Django REST Framework Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/) instead! It's short and get you up running in minutes. You should read Django docs sparingly to follow the quickstart.

## Learning Python

Learning Python is easy peasy if you have solid background in JavaScript. My learning path is reading W3School (Yea, I know it has bad reputation, but it's great to have a concise overview of the subject), complemented it with Python official tutorials on the basics of primitives and then straight to Django.

## Closing

Django is amazing at bootstraping the Model-View part of the project. Features that I appreciated the most are: serialization, migration and authentication.

### Comparison with Laravel

Laravel comes with more artisan magic tools out of the box. For building a REST API, it doesn't add much to the table, but it saves you time looking for packages in the wild.

Django modularity gives rise to outstanding third party packages like Django REST Framework. On the other side, PHP has a rich package ecosystem too and Symfony that Laravel is built upon is an old behemoth.

Both are good, the decision boils down to familiarity of developer and language ecosystem. 

There are more PHP web developers in the wild, so pick PHP for a common web. It's easier to pick up as a newbie web developer, but the community suffers from pseudo-developer syndrome.

Python is known for data wrangling. So if you want to get big and data-driven, Python is an easy pick.
