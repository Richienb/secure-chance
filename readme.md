# secure-chance [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/secure-chance/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/secure-chance)

Create an instance of [Chance](https://github.com/chancejs/chancejs) with a truly random seed.

[![NPM Badge](https://nodei.co/npm/secure-chance.png)](https://npmjs.com/package/secure-chance)

## Install

```sh
npm install secure-chance
```

## Why

[Chance](https://github.com/chancejs/chancejs) currently uses a [Mersenne Twister](https://en.wikipedia.org/wiki/Mersenne_Twister) seeded by `Math.random()` for randomness.

The problem with this is that `Math.random()` [is not cryptographically secure](https://security.stackexchange.com/questions/84906/predicting-math-random-numbers/110241#110241) as it was never required in the [specification](https://tc39.es/ecma262/#sec-math.random).

`secure-chance` fixes this issue by generating a random seed using quantum randomness provided by [qrng.anu.edu.au](https://qrng.anu.edu.au) with a fallback to secure offline methods like the [Node.js Crypto API](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) or the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues).

## Usage

```js
const secureChance = require("secure-chance")
const chance = await secureChance()

chance.integer({ min: -20, max: 20 })
chance.string({ length: 5 })
```

## API

### secureChance()

Returns a promise which resolves with an instance of [Chance](https://chancejs.com).
