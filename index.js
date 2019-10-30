"use strict"

const Chance = require("chance")
const fetch = require("cross-fetch")
const { Random, nativeMath, browserCrypto, nodeCrypto } = require("random-js")
const { isBrowser, isNode } = require("browser-or-node")
const { stringify: encodeQueryString } = require("query-string")

// OFFLINE: Get crypto strategy
let gen
if (isNode) gen = nodeCrypto
else if (isBrowser && window && window.crypto) gen = browserCrypto
else gen = nativeMath

// OFFLINE: Create generator
const num = new Random(gen).integer(-0x20000000000000, 0x20000000000000)
let randomizer = new Chance(num)

// ONLINE: Get randomizer seed
fetch(`https://www.random.org/integers/?${encodeQueryString({
    num: 1,
    col: 1,
    min: 1,
    max: 1000000000,
    base: 10,
    format: "plain",
    rnd: "new",
})}`)
    .then((res) => res.text())
    .then((res) => randomizer = new Chance(res))
    .catch(() => { })

// Export object
const RANDSYMBOL = Symbol("RANDSYMBOL")
Object.defineProperty(global, RANDSYMBOL, {
    get: () => randomizer,
    enumerable: true,
    configurable: true,
})
module.exports = global[RANDSYMBOL]
