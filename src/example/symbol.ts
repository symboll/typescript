let s1: symbol = Symbol()
let s2: symbol = Symbol()
// s1 === s2  // false

let s3: symbol = Symbol("zhangsan")
let s4: symbol = Symbol("zhangsan")
// s3 === s4   // false

let s5: symbol = Symbol(123)
// 先用tostring 将123 转成 '123'

// symbol 值 不能与其他类型的值 做运算
// symbol 值可以转换成string | boolean
const s6: unique symbol = Symbol()
// s6.toString()
// Boolean(s6)

// 作为属性名
const info = {
  name: "zhangsan",
  [s6]: 18,
}
console.log(info[s6])
// console.log(Object.keys(info))                    // ["name"]
// console.log(Object.getOwnPropertyNames(info))     // ["name"]
// console.log(Object.getOwnPropertySymbols(info))   // [Symbol()]
// console.log(Reflect.ownKeys(info))                 // ["name", Symbol()]

// symbol 的2个静态方法
let s7 = Symbol.for("zhangsan")
let s8 = Symbol.for("zhangsan")
// s7 === s8            // true
// Symbol.keyFor(s7)    // 'zhangsan'

class A {
  public static [Symbol.hasInstance](value: any) {
    console.log("==>", value)
    return false;
  }
  constructor(private name: string) {}
  public [s6]() {
    return this.name
  }
  public getName() {
    return this.name
  }
}

const ab = new A("nativeLee")
// console.log(ab[s6]())
// console.log(ab.getName())     // ok
console.log(ab instanceof A)
// 11个内置symbol值
// Symbol.hasInstance
