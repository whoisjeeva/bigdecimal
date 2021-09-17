const BigDecimal = require("./bigdecimal.js")

console.time("big")
let big4 = new BigDecimal(0.1)
big4.plus(0.1)
big4.plus(0.1)
console.log(big4.value)
console.timeEnd("big")

console.time("native")
let native = 0.1 + 0.1 + 0.1
console.log(native)
console.timeEnd("native")

console.log(new BigDecimal(0.3).divide(0.1))

