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

test.after(t => {
	// Delete the test path, provide a noop callback
	rimraf(testPath, Function.prototype);
	t.end();
});
