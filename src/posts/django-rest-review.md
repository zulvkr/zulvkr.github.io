---
layout: blog.html
title: Learning Django as JavaScript Developer
description: I just learned Django, specifically Django Rest Framework, with minuscle level of Python experience. I also made comparison with Laravel. Here are my 2 cents.
date: 2021-07-01
tags:
  - post
  - Python
  - Django Rest Framework
  - Laravel
---

I've been looking around for better backend solution. In JavaScript jungle land, currently there are too many budding technologies to try, a situation that excarbated by TypeScript hype train.

In order to extricate myself from that, I went Python. It has better stability and known as a solid backend language. It has amazing tools too: battery-included Django, micro-framework Flask, and their newer async cousin FastAPI. Backend has never been better in Python, so let's hop on the back of this snake.

So, as told by people of the internet, I learned Django first, which is a more opinionated framework that follow convention.

I tell you it's not easy, compared to learning Flask. Django is colossal, and the first thing I figured out to be confusing is the virtual env and folder structure.

## What is virtual env?

Virtual environment is a way to localize Python package installation. The default way to install Python package is global installation. Virtual environment let you install packages in local folder so you don't mess up your global Python.

Python has standard library to manage virtual enviroment called `venv`. But before `venv` was available, many third party packages already used by people. Some of them are `virtualenv` and `pipenv` which used a lot by python gurus 1-2 years ago. Generally, just stick with `venv` to follow the convention.

Ah yes, unlike how `package.json` works. Your console and VSCode may not automatically used the locally installed Python env. You need to specify it using `source` in console or "Select Interpreter" in VSCode.

## How is Django structured?

Django folder structure and Python packages in general look alien to me. There is a stupid moment when I didn't put `.` when running `startingproject` and got confused for an hour due to wrong folder structure.

It has two start command, `startproject` and `startapp`. Laravel only has one app folder, but Django can have many of them. So why do I want so many models and templates files separated in different folder? What is App?

I like this quote from [The Django Book](https://djangobook.com/mdj2-django-structure/):

> Stating up front that Django is an MVC framework gets one of two responses:
>
> 1. Beginners say “What the heck is MVC? _groan_. Guess that’s one more fricking thing I have to learn!”
> 2. More experienced programmers say “Aha! It’s just like Framework X.”
>
> In both cases, they’re almost entirely wrong.

Well, there is no consensus on how project is structured. A simple project may only need a single app. You can put everything into one big folder, or separate some part of project in a few app. To go even further, an app can be made into a modular standalone Python package.

## Django tutorial is confusing.

I had been playing around with Laravel before and everything felt so magical and in place. Things are just work. Coupled with amazing tutorial on the internet and matured situation of PHP as language of the web, Laravel is undoubtably the most supportive, easiest framework I've ever felt.

Back to Django, it sure has the same spirit with Laravel, but my onboarding has been unpleasant due to python3 vs python2, virtualenv, and other python issues.

Maybe I'm biased, I have Homestead already set up before trying Laravel so it's a breeze to try.

The official tutorial in Django is easy to follow but hard to understand. It consisted of seven steps, with each step I get to know more Django magic that I don't need for a REST API. So I stopped when I met templating step.

If you are like me, you should not bother with the official tutorial.

Start with [Django REST Framework Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/) instead! It's short and get you up running in minutes. You should read Django docs sparingly to follow the quickstart.

## Closing

Django is amazing to bootstrap the Model-View part of the project. Features that I appreciated the most are: serialization, migration and authentication.

### Comparison with Laravel

Laravel comes with more artisan magic tools out of the box. For building a REST API, it doesn't add much to the table, but it saves you time looking for packages in the wild.

Django modularity gives arise to outstanding third party packages like Django REST Framework. On the other side, PHP has rich package ecosystem too and Symfony that Laravel is built upon is an old behemoth.

Both are good, the decision boils down to familiarity of developer and language ecosystem. 

There are more PHP web developers in the wild, so pick PHP for a common web. It's easier to pickup as a newbie web developer, but the community suffers from pseudo-developer syndrome.

Python known for data wrangling. So if you want to get big and data-driven, Python is easy pick.