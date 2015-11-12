'use strict';

var builderFactory = require('junit-report-builder');
var slug = require('slug');
var path = require('path');

module.exports = function (suiteName, className, testName, passed, failureMessage, opts) {
	if (!suiteName) {
		throw new Error('Missing parameter: suiteName');
	}

	if (!className) {
		throw new Error('Missing parameter: className');
	}

	if (!testName) {
		throw new Error('Missing parameter: testName');
	}

	opts = opts || {};

	var builder = builderFactory.newBuilder();

	// Create a test suite
	var suite = builder.testSuite().name(suiteName);

	// Create a test case
	var testCase = suite.testCase()
		.className(className)
		.name(testName);

	if (!passed) {
		testCase.failure(failureMessage);
	}

	var outputFile = path.join(opts.outputPath || '.', slug(suiteName) + '.xml');
	builder.writeTo(outputFile);

	return outputFile;
};
