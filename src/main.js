#!/usr/bin/env node
require('dotenv').config({path: ".env.prd"})
const commander = require('commander')
const getFixAction = require('./commands/getFixAction')
const withErrorHandler = require('./shared/withErrorHandler')

commander
  .requiredOption('-s, --start <datetime>', 'comienzo del periodo deseado')
  .requiredOption('-e, --end <datetime>', 'final del periodo deseado')
  .action(withErrorHandler(getFixAction))

commander.parseAsync(process.argv)
