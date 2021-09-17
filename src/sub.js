const add = require("./add.js")

function sub(n1, n2) {
    let f1 = parseFloat(n1.value)
    let f2 = parseFloat(n2.value)
    if (f1 < 0) {
        let b1 = Math.abs(f1).toString()
        let b2 = Math.abs(f2).toString()
        if (!b1.includes(".")) {
            b1 += ".0"
        }
        if (!b2.includes(".")) {
            b2 += ".0"
        }
        return `-${add({value: b1}, {value: b2})}`
    }

    let op = "-"

    let num1, num2, _dec1, _dec2
    if (f1 > f2) {
        op = "+"
        let v1 = n1.value.toString().split(".")
        num1 = v1[0]
        _dec1 = v1[1]
        let v2 = n2.value.toString().split(".")
        num2 = v2[0]
        _dec2 = v2[1]
    } else {
        op = "-"
        let v1 = n1.value.toString().split(".")
        num2 = v1[0]
        _dec2 = v1[1]
        let v2 = n2.value.toString().split(".")    
        num1 = v2[0]
        _dec1 = v2[1]
    }

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    /* pad the decimal numbers to be equal length */
    let [dec1, dec2] = padnums(_dec1, _dec2)
    let d1 = parseInt(dec1)
    let d2 = parseInt(dec2)
    if (d1 < d2) {
        d1 = parseInt(`1${d1}`)
        num1 -= 1
    }

    let decs = d1 - d2
    let num = num1 - num2

    return `${op == '-' ? '-' : ''}${num}.${decs}`
}

function padnums(num1, num2) {
    if (num1.length > num2.length) {
        let pad = num1.length - num2.length
        for (let i = 0; i < pad; i++) {
            num2 += "0"
        }
    } else if (num2.length > num1.length) {
        pad = num2.length - num1.length
        for (let i = 0; i < pad; i++) {
            num1 += "0"
        }
    }
    return [num1, num2]
}


module.exports = sub
