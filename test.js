const test = require("ava")
const secureChance = require(".")

test("main", async t => {
	const chance = await secureChance()
	t.is(typeof chance.integer(), "number")
})
