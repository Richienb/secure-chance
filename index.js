const Chance = require("chance")
const { Random, nativeMath, browserCrypto, nodeCrypto } = require("random-js")
const envCrosser = require("env-crosser")
const Mutatable = require("mutatable")
const Rdo = require("rdo")

const rnd = new Rdo()
const randomizer = new Mutatable()

// OFFLINE: Get crypto strategy
const browCrypt = window && window.crypto ? browserCrypto : undefined
const gen = envCrosser({
    node: nodeCrypto,
    browser: browCrypt,
    worker: browCrypt,
    fallback: nativeMath,
})

// OFFLINE: Create generator
const num = new Random(gen).integer(-0x20000000000000, 0x20000000000000)
randomizer.exportable = new Chance(num)

// ONLINE: Get randomizer seed
rnd.integer({
    min: -1e9,
    max: 1e9,
})
    .then((res) => randomizer.exportable = new Chance(res))
    .catch(() => { })

// Export object
module.exports = randomizer.exportable
