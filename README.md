### BigDecimal

BigDecimal.js provides arbitrary-precision signed decimal numbers.


### Usage

Install using NPM

```sh
$ npm i --save @bashrc/bigdecimal
```

**Import**

```js
import BigDecimal from "@bashrc/bigdecimal"
```

BigDecimal provides basic arithmetic operation like, plus, minus, multiply, and divide

**plus**

```js
// 0.1 + 0.1 + 0.1
let num = new BigDecimal(0.1).plus(0.1).plus(0.1)
```

**minus**

```js
// 0.3 - 0.1
let num = new BigDecimal(0.3).minus(0.1)
```

**multiply**

```js
// 0.2 * 0.1
let num = new BigDecimal(0.2).multiply(0.1)
```

**divide**

```js
// 0.3 / 0.1
let num = new BigDecimal(0.3).divide(0.1)
```
