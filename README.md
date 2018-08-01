# express-header

  Fast, unopinionated, minimalist header middleware for the [express](http://expressjs.com) framework.

```js
var express = require('express')
var app = express()
var expressHeader = require('express-header');

app.use(expressHeader([
	{key: 'X-Alpha', value: 'Alpha'},
	{key: 'X-Beta', value: 'Beta'},
	{key: 'x-gamma', value: 'Gamma'},
	{key: 'x-gamma', value: ''       }
]));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express-header
```

## Features

  * Express framework support in middleware philosophy
  * HTTP headers manipulation (add, remove, etc)
  * Headers content modifications
  * Focus on high performance
  * Super-high test coverage
  
## Docs & Community

  * Website and Documentation - [[website repo](https://github.com/foprofile/express-header)]
  * [Express Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [GitHub Organization](https://github.com/foprofile) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/foprofile/express-header/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific header middleware. With support for many 
  user cases, you can quickly craft your perfect framework with the Express-Header middleware.

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People

The author of Express-Header is [foprofile](https://github.com/foprofile)

The original author of Express is [TJ Holowaychuk](https://github.com/tj)

The lead maintainer when this header middleware born was [Douglas Christopher Wilson](https://github.com/dougwilson)

[List of all contributors](https://github.com/foprofile/express-header/blob/master/Contributing.md)

## License

  [MIT](LICENSE)
