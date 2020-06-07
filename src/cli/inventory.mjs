#!/usr/bin/env node

import inventory from '../effects-docker/inventory.mjs'

inventory().map(JSON.stringify).each(console.log)
