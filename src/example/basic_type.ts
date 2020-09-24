// boolean
let bool: boolean = false
bool = true
// bool = 'abc'

// number
let num: number = 123
// num = 'abc'
num = 0b1111011
num = 0o173
num = 0x7b

let bigint: bigint = 12n
console.log(bigint)

// string
let str: string = "abc"
str = `数值是${num}`

// Array
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ["a", "b"]
let arr3: Array<number| string> = [1, 2, 3, "a"]   // 联合类型
let arr4: Array<number| string> = [1, 2, 3, "a"]

// tuple
let tuple: [number, string] = [ 1, "s"]

// enum
enum Roles {
  USER,
  ADMIN = 4,
  SUPET_ADMIN,
}
console.log(Roles[4])

// any
let value: any = 123
value = "abc"
value = false
let arr5: any[] = [1, 2, "a", false]

// void
let res = (function(arg: string): void {})("")
res = undefined
// res = null

// undefined & null
let u: undefined
let n: null = null

// never
// 1. 抛错
// 2. 死循环
let errorfunc = function() {
  throw new Error()
}
let infinitefunc = function() {
  while (true) {}
}
// let a = errorfunc()
// u = a
// n = a

// Object
let obj = { name: "symbollee" }
function printObj(ob: object): void {
  console.log(ob)
}
printObj(obj)
// printObj(new Date())
// printObj([1,2,3])

// 类型断言
const getLength = (target: number| string): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

// 或者使用自定义类型保护
const getLength2 = (target: number| string): number => {
  if (typeof target === "string") {
    return target.length
  } else {
    return target.toString().length
  }
}
