let s1: symbol = Symbol()
let s2: symbol = Symbol()
// s1 === s2  // false

let s3: symbol = Symbol("zhangsan")
let s4: symbol = Symbol("zhangsan")
// s3 === s4   // false

let s5: symbol = Symbol(123)
// 先用toString 将123 转成 '123'

// symbol 值 不能与其他类型的值 做运算
// symbol 值可以转换成string | boolean
const s6: unique symbol = Symbol()
// s6.toString()
// Boolean(s6)

// 作为属性名
const info = {
  name: "zhangsan",
  [s5]: 'male',
  [s6]: 18,
}

console.log('symbol:', info[s5])
console.log('unique symbol:', info[s6])
// console.log(Object.keys(info))                    // ["name"]
// console.log(Object.getOwnPropertyNames(info))     // ["name"]
// console.log(Object.getOwnPropertySymbols(info))   // [Symbol()]
// console.log(Reflect.ownKeys(info))                 // ["name", Symbol()]

// symbol 的2个静态方法
let s7 = Symbol.for("zhangsan")
let s8 = Symbol.for("zhangsan")
console.log('s7 === s8:', s7 === s8)                   // true
console.log('Symbol.keyFor(s7):', Symbol.keyFor(s7))   // 'zhangsan'

/**
 * 11个内置symbol值
 *
 * (1) Symbol.hasInstance
 */
class HasInstanceClass {
  public static [Symbol.hasInstance](value: any) {
    console.log("==>", value)
    return false;
  }
  constructor(private name: string) {}
  public [s5]() {
    return this.name
  }
  public [s6]() {
    return this.name
  }
  public getName() {
    return this.name
  }
}

const hi = new HasInstanceClass("native")
console.log(hi[s5]())
console.log(hi[s6]())
console.log(hi.getName())     // ok
console.log(hi instanceof HasInstanceClass)

/**
 * (2) Symbol.isConcatSpreadable
 */
let arrIcs = [1, 2];
console.log(([] as number[]).concat(arrIcs, [3, 4]));        // 打印结果为[1, 2, 3, 4]，length为4
let arrIcs1 = ["a", "b"];
console.log(arrIcs1[Symbol.isConcatSpreadable]); // undefined
arrIcs1[Symbol.isConcatSpreadable] = false;
console.log('=>', ([] as Array<number| string>).concat(arrIcs1, [3, 4]));         //

/**
 * (3) Symbol.species
 */
class SpeciesClass extends Array {
  constructor(...params) {
    super(...params)
  }
  static get [Symbol.species]() {
    return Array;
  }
  public getName() {
    return "native";
  }
}
const sc = new SpeciesClass(1, 2, 3);
const derivativeSc = sc.map((item) => item + 1);
console.log(derivativeSc);                          // [2, 3, 4]
console.log('instanceof SpeciesClass:', derivativeSc instanceof SpeciesClass);  // true  // false
console.log('instanceof Array:', derivativeSc instanceof Array);                // true
// console.log(derivativeSc.getName());             // error: 类型“any[]”上不存在属性“getName”。ts(2339)

/**
 * (4) Symbol.match、Symbol.replace、Symbol.search 和 Symbol.split
 */
let matchObj = {
  [Symbol.match](string) {
    return string.length;
  }
};
console.log("abcde".match(matchObj)); // 5

// String.prototype.match 如果传入一个非正则表达式对象 regexp，则会使用 new RegExp(regexp) 隐式地将其转换为正则表达式对象。

/**
 * (8) Symbol.iterator
 */
const iteratorArr = [1, 2, 3];
const iterator = iteratorArr[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
 * (9) Symbol.toPrimitive
 */
let primitiveObj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'string';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

console.log('2 * primitiveObj', 2 * (primitiveObj as any) )                  // 246
console.log('3 + primitiveObj', 3 + (primitiveObj as any) )                  // '3default'
console.log('primitiveObj == default', (primitiveObj as any) == 'default')  // true
console.log('String(primitiveObj)', String(primitiveObj) )                   // 'string'

/**
 * (10) Symbol.toStringTag
 */
let toStringTagObj = {
  [Symbol.toStringTag]: "native"
};
console.log('toStringTagObj.toString()', toStringTagObj.toString()); // "[object native]"
let toStringTagObj2 = {
  get [Symbol.toStringTag]() {
    return "native";
  }
};
console.log('toStringTagObj2.toString()', toStringTagObj2.toString()); // "[object native]"

/**
 * (11) Symbol.unscopables
 */

// let obj = {
//   a: "a",
//   b: "b"
// };
// with (obj) {
//   console.log(a); // "a"
//   console.log(b); // "b"
// }
console.log('(Array.prototype[Symbol.unscopables]', Array.prototype[Symbol.unscopables])
