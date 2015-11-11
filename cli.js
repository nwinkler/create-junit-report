#!/usr/bin/env node
'use strict';
var meow = require('meow');
var createJunitReport = require('./');

var cli = meow([
	'Usage',
	'  $ create-junit-report [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ create-junit-report',
	'  unicorns & rainbows',
	'  $ create-junit-report ponies',
	'  ponies & rainbows'
]);

console.log(createJunitReport(cli.input[0] || 'unicorns'));
