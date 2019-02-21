drails
======

cli for docker compose and rails users, this cli helps with running your rails commands
like `db:drop` or `generate model` inside your docker web service container.
Your rails service on the docker compose needs to be named `"web"`

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/drails.svg)](https://npmjs.org/package/drails)
[![Downloads/week](https://img.shields.io/npm/dw/drails.svg)](https://npmjs.org/package/drails)
[![License](https://img.shields.io/npm/l/drails.svg)](https://github.com/alejoreact/drails/blob/master/package.json)

* [Install](#install)
* [Usage](#usage)

# Prerequisite
* [docker](https://docs.docker.com/install/) installed
* [docker-compose](https://docs.docker.com/compose/install/) installed
* Your rails service on the `docker-compose.yml` needs to be named `"web"`

# Install
```sh-session
$ yarn add drails
$ # or
$ yarn global add drails
```

# Usage
```sh-session
$ drails db:create
$ drails drails g model User
$ drails db:migrate
```
then you could start up your docker compose services
```sh-session
$ docker-compose up
```