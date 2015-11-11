#!/usr/bin/env node
'use strict';
var meow = require('meow');
var createJunitReport = require('./');

var cli = meow([
	'Usage',
	'  $ create-junit-report [suite] [class] [test] [passed] [failureMessage]',
	'',
	'Options',
	'  --outputPath  path [Default: .]',
	'',
	'Examples',
	'  $ create-junit-report suite class test 1 --outputPath foo',
	'    ==> creates `foo/suite.xml`'
]);

createJunitReport(cli.input[0], cli.input[1], cli.input[2], cli.input[3], cli.input[4], cli.flags);
