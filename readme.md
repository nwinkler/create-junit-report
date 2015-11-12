# create-junit-report [![Build Status](https://travis-ci.org/nwinkler/create-junit-report.svg?branch=master)](https://travis-ci.org/nwinkler/create-junit-report)

Creates a JUnit XML file based on the provided input parameters.

Can be used to create a JUnit XML file from command line, e.g. from a shell script's results. This is great for continuous integration, in case you're running some test steps that don't provide their own JUnit-compatible reporter.

## Install

```
$ npm install --save create-junit-report
```


## Usage

```js
const createJunitReport = require('create-junit-report');

createJunitReport('suite', 'class', 'test', false, 'Foo Bar Baz', { outputPath: 'foo' });
//=> creates `foo/suite.xml` file
```

The generated `foo/suite.xml` file looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites>
  <testsuite name="suite">
    <testcase classname="class" name="test">
      <failure message="Foo Bar Baz"/>
    </testcase>
  </testsuite>
</testsuites>
```

## API

### createJunitReport(suiteName, className, testName, passed, failureMessage, [options])

#### suiteName

Type: `string`

Name of the test suite, also the name of the generated file (+ `.xml`). Mandatory parameter.

#### className

Type: `string`

Used for the result file's `classname` attribute of the testcase entry. Mandatory parameter.

#### testName

Type: `string`

Used for the result file's `name` attribute of the testcase entry. Mandatory parameter.

#### passed

Type: `boolean`

Used to indicate test success (_truthy_) or test failure (_falsy_).

#### failureMessage

Type: `string`

Optional failure message in case of a test failure.

#### options

##### outputPath

Type: `string`  
Default: `.`

Output directory of the generated file.


## CLI

```
$ npm install --global create-junit-report
```

```
$ create-junit-report --help

  Usage
	 $ create-junit-report [suite] [class] [test] [passed] [failureMessage]

  Options
	 --outputPath  path [Default: .]

  Examples
	 $ create-junit-report suite class test 1 --outputPath foo
		 ==> creates `foo/suite.xml`
```

## License

MIT © [Nils Winkler](https://github.com/nwinkler)
