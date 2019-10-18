import test from "ava"
import chance from "."

test("main", (t) => {
    t.truthy(chance.integer)
})
