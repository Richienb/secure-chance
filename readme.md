# Secure Chance [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/secure-chance/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/secure-chance)

Chancejs with a truly random seed.

[![NPM Badge](https://nodei.co/npm/secure-chance.png)](https://npmjs.com/package/secure-chance)

## Install

```sh
npm install secure-chance
```

## Why

Chancejs currently uses a Mersenne Twister powered by `Math.random()` for randomness.

The problem with this is that `Math.random()` was never known for it's unpredicability or security and browser manufacturers were given the freedom to choose how they implement it, as discussed in [this SA answer](https://security.stackexchange.com/questions/84906/predicting-math-random-numbers/110241#110241).

`secure-chance` fixes this issue by using the true random number generator API provided by [random.org](https://www.random.org/integers) to generate a seed with a fallback to secure offline methods like the [NodeJS Crypto API](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) or the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues).

## Usage

You can use `secure-chance` as if it was an initialised Chance object.

```js
const chance = require("secure-chance");

chance.integer({ min: -20, max: 20 });
chance.string({ length: 5 });
```

## API

Refer to the [ChanceJS documentation](https://chancejs.com/).
