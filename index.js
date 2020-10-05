const quantumRandom = require("quantum-random")
const secureRandom = require("math-random")
const Chance = require("chance")

// State space of a Mersenne Twister, the pseudorandom algorithm used by chance. See https://stackoverflow.com/a/24072187/8384910
const STATE_SPACE = 19937

const randomSeed = async () => {
	try {
		return await quantumRandom({size: STATE_SPACE})
	} catch {
		return secureRandom()
	}
}

module.exports = async () => new Chance(await randomSeed())
