# docker-inventory-git

[![Build Status](https://travis-ci.org/hugojosefson/docker-git-inventory.svg?branch=master)](https://travis-ci.org/hugojosefson/docker-git-inventory)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/docker-git-inventory.svg)](https://npmjs.com/package/@hugojosefson/docker-git-inventory)
[![License MIT](https://img.shields.io/npm/l/@hugojosefson/docker-git-inventory.svg)](https://tldrlegal.com/license/mit-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](https://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

This is a library and a service for extracting information from a Docker Swarm
about currently running services, and pushing custom named refs to git repos.
That means you can see the deployment status from your Docker Swarm, in your
development git tools.

## Prerequisite

Node.js, `v13.2.0` or higher, ideally at least `v14.0.0`.

Recommended to install latest via [nvm](https://github.com/nvm-sh/nvm#readme):

```bash
nvm install stable
```

## Usage

```bash
npx --package @hugojosefson/docker-git-inventory docker-git-inventory --help
```

Will print usage information.

## Programmatic access

You can also `import` the module, and use its exported functions
programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### server

Serves a person or entity.

##### Parameters

- `options`
  **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**
  - `options.whom`
    **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
    Who the service is for.

Returns
**[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**
A `Promise` for the server.

#### inventory

Takes an inventory of currently running Docker stacks.

Returns
**Highland.Stream&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>**
A Highland stream of objects, each describing one service.
