---
layout: blog.html
title: Python Version and Dependency Management
description: Learning Python as JavaScript Developer Series Part 1.
date: 2021-07-01
update: 2021-12-31
tags:
  - post
  - Python
  - Django
---

## Background story

I was learning Python to build a REST API server using Django with little experience in Python. People praised Django official documentation but I find it difficult to grok for the inexperienced. The reasons are:

1. The sheer amount of documentation available causes information overload.
2. I feel the way Django is structured, the tons of imports and nested modules makes me question the design choice. Which possibly due to
3. Legacy. Legacy and choices available are distracting.

But even before touching Django or any Python tutorials, there are some pythonic stumble blocks that need to be addressed. It's a common knowledge that I hoped to have learned before starting any Python project.

## Dependency Management and Python Environment

You will find all Python packages use pip in the installation section, but in actual projects no one uses that. Using pip to install means installing a dependency globally on the default Python version in your system.

It's like using `npm -g install some-app`, and you aren't sure which version of Python you use.

Even worse, there are at least 5 solutions to resolve the Python virtual environment (more on this later).

### Introduction to pyenv

Python installation in various operating systems is kind of messy, some use Python 2, some Python 3. Some install them as python2 and python3 instead of python. Python version manager is a necessity.

You can use [pyenv](https://github.com/pyenv/pyenv) to juggle between Python versions. If you are on Linux you may want to use [pyenv installer](https://github.com/pyenv/pyenv-installer).

Are you familiar with Node Version Management (nvm)? pyenv API has some similarity with nvm. You can call pyenv to see all available commands. I noted common pyenv commands and similar nvm command counterpart.

| Command              | Description                                 | Similar nvm command       |
| -------------------- | ------------------------------------------- | ------------------------- |
| pyenv version        | Check version used in the directory         | nvm current               |
| pyenv versions       | List installed versions                     | nvm ls                    |
| pyenv install 3      | List available Python 3 to install          | nvm ls-remote 14          |
| pyenv install 3.10.1 | Install a version                           | nvm install 14.18.2       |
| pyenv global         | Show global version                         | nvm alias default         |
| pyenv global 3.10.1  | Set global version                          | nvm alias default 14.18.2 |
| pyenv local 3.10.1   | Set local version, saved in .python-version | node -v > .nvmrc          |

\*: pyenv resolves the python version per directory, while nvm resolves the node version globally. Calling `nvm use` with an unspecified version will set node to default alias so it's rather similar with global python version.

## Introduction to Poetry and virtual environment

When installing a package using pip, by default your shell will identify the global python environment and install the package globally. We don't want to install packages globally, so we need to set up [virtual environment](https://docs.python.org/3/library/venv.html) and activate it.

After activating the virtual environment in the shell, subsequent Python commands will use the virtual environment as interpreter and packages will be installed locally in the virtual environment. Think of it as “node_modules” folder.

Previously people used venv, virtualenv, pipenv and all its variations to manage virtual environments. Now [Poetry](https://python-poetry.org/) is gaining popularity. Basically its npm for Python plus virtual environment manager.

Poetry will create:

1. Virtual environment
2. pyproject.toml, the "package.json"
3. poetry.lock, the "package-lock.json"

Here is a sample of pyproject.toml

```toml
[tool.poetry]
name = "kulpy"
version = "0.1.0"
description = ""
authors = ["Ivan Zulfikar <ivan.zulf.ikar@gmail.com>"]

[tool.poetry.scripts]
dev = 'fast.scripts:dev'

[tool.poetry.dependencies]
python = "^3.10"
aiohttp = "^3.8.1"
fastapi = {extras = ["all"], version = "^0.70.1"}

[tool.poetry.dev-dependencies]
pytest = "^6.2.5"
pytest-cov = "^3.0.0"
pre-commit = "^2.16.0"
flake8 = "^4.0.1"
black = {version = "^21.12b0", allow-prereleases = true}
mypy = "^0.910"

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"
```

Common commands to use in Poetry and the its npm command counterpart

| Command                   | Description                                          | Similar npm command      |
| ------------------------- | ---------------------------------------------------- | ------------------------ |
| poetry add fastapi['all'] | Install a dependency                                 | npm install fastify      |
| poetry add mypy --dev     | Install a dev-dependency                             | npm install eslint --dev |
| poetry install            | Install dependencies in pyproject.toml               | npm install              |
| poetry update             | Update deps but not beyond version in pyproject.toml | npm install              |
| poetry remove fastapi     | Remove a dependency                                  | npm uninstall fastify    |
| poetry remove black --dev | Remove dev-dependencies in pyproject.toml            | npm uninstall prettier   |
| poetry shell              | Activate virtual environment                         | -                        |

### Visual Studio Code Integration

Visual Studio Code plays really well with Python virtual environment. When using Visual Studio Code, you can run command "Python: Select interpreter" to select the correct Python environment (Command can be accessed with Ctrl + Shift + P). This will tell Visual Studio Code to resolve Python dependency for Intellisense properly.

Selecting the interpreter also makes Visual Studio Code to auto activate virtual env when opening the integrated terminal.

Visual Studio Code also can install formatter and linter for you. It will prompt you to install linter and formatter when you use Visual Studio Code command: "Python: run linting" and "Format document". Clicking the prompt button will install it via the detected package manager, in example when installing black formatter, Visual Studio Code will call `poetry add --dev black --allow-prereleases` to install it.

## Alternative to virtual environment: Docker container

By using Docker to contain Python, there is no need for a virtual environment to contain the dependencies. But Poetry can work well with Docker by using multistage build.

If you prefer to use a simple Docker setup, using docker + pip without a virtual environment will be a better choice.
