function calcpre(num1, num2, pre) {
    let v = (num1*num2).toString()
    if (!pre) pre = 0

    if (v.includes(".")) {
        pre += 1
        return calcpre(num1 * 10, num2, pre)
    }

    return {value: v, pre: pre}
}

function formatCalc(calc) {
    let v = [calc.value.substring(calc.pre), ".", calc.value.substring(0, calc.pre)].join("")
    if (v.startsWith(".")) {
        v = "0" + v
    } else if (v.endsWith(".")) {
        v = v + "0"
    }
    return v
}

function mul(num1, num2) {
    tmp1 = parseFloat(num1.value)
    tmp2 = parseFloat(num2.value)
    if (isNaN(tmp1) || isNaN(tmp2)) {
        throw new Error("Invalid input")
    }

    calc = calcpre(tmp1, tmp2)

    return formatCalc(calc)
}


module.exports = mul;
