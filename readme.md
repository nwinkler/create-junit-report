# create-junit-report [![Build Status](https://travis-ci.org/nwinkler/create-junit-report.svg?branch=master)](https://travis-ci.org/nwinkler/create-junit-report)

> My super module


## Install

```
$ npm install --save create-junit-report
```


## Usage

```js
const createJunitReport = require('create-junit-report');

createJunitReport('unicorns');
//=> 'unicorns & rainbows'
```


## API

### createJunitReport(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global create-junit-report
```

```
$ create-junit-report --help

  Usage
    create-junit-report [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ create-junit-report
    unicorns & rainbows
    $ create-junit-report ponies
    ponies & rainbows
```


## License

MIT © [Nils Winkler](https://services.sungard.com/git/users/nils.winkler)
