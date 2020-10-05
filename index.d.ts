import Chance from "chance"

/**
Create an instance of [Chance](https://github.com/chancejs/chancejs) with a truly random seed.

@example
```
const secureChance = require("secure-chance")
const chance = await secureChance()

chance.integer({ min: -20, max: 20 })
chance.string({ length: 5 })
```
*/
declare function secureChance(): Promise<InstanceType<typeof Chance>>

export = secureChance
