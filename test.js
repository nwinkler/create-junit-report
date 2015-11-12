import test from 'ava';
import fn from './';
import rimraf from 'rimraf';
import path from 'path';

var testPath = 'test-temp';

test('outputFile', t => {
	var suiteName = 'suiteName',
			className = 'className',
			testName = 'testName';
	t.is(fn(suiteName, className, testName, true, '', { outputPath: testPath}), path.join(testPath, 'suiteName.xml'));
	t.end();
});

test('missing suite parameter', t => {
	var suiteName = '',
			className = 'className',
			testName = 'testName';
	t.is(fn(suiteName, className, testName, true, '', { outputPath: testPath}), path.join(testPath, 'suite.xml'));
	t.end();
});

test('missing class parameter', t => {
	var suiteName = '',
			className = '',
			testName = 'testName';
	t.throws(() => { fn(suiteName, className, testName, true, '', { outputPath: testPath})}, 'Missing parameter: className');
	t.end();
});

test('missing test parameter', t => {
	var suiteName = '',
			className = 'className',
			testName = '';
	t.throws(() => { fn(suiteName, className, testName, true, '', { outputPath: testPath})}, 'Missing parameter: testName');
	t.end();
});

test.after(t => {
	// Delete the test path, provide a noop callback
	rimraf(testPath, Function.prototype);
	t.end();
});
