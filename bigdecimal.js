const add = require("./src/add.js")
const sub = require("./src/sub.js")
const div = require("./src/div.js")
const mul = require("./src/mul.js")

class BigDecimal {
    constructor(num) {
        this._value = num.toString()
        if (!this._value.includes(".")) {
            this._value += ".0"
        }
    }

    plus(num) {
        let bigNum = new BigDecimal(num)
        this._value = add(this, bigNum)
        return this
    }

    minus(num) {
        let bigNum = new BigDecimal(num)
        this._value = sub(this, bigNum)
        return this
    }

    divide(num) {
        let bigNum = new BigDecimal(num)
        this._value = div(this, bigNum)
        return this
    }

    multiply(num) {
        let bigNum = new BigDecimal(num)
        this._value = mul(this, bigNum)
        return this
    }

    get value() {
        return Number(this._value)
    }
}


module.exports = BigDecimal

