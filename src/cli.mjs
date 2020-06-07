#!/usr/bin/env node

import yargs from 'yargs'
import termSize from 'term-size'

import serverCommand from './yargs-commands/server-command.mjs'

yargs
  .strict()
  .command(serverCommand())
  .demandCommand(1)
  .help()
  .wrap(termSize().columns)
  .parse()
