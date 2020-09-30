// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }
// const add = (arg1: number, arg2: number): number => arg1 + arg2

let add: (x: number, y: number) => number
// add = (arg1: number, arg2: number): number  => arg1 + arg2

/**
 * 使用接口定义函数类型
 */

interface Add {
  (x: number, y: number):number
}

// type Add = (x: number, y: number) => number

/**
 * 函数的可选参数
 */
type addFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunc1: addFunction = (arg1: number, arg2: number, arg3: number) => arg1 + arg2 + arg3
let addFunc2: addFunction = (arg1: number, arg2: number) => arg1 + arg2

/**
 * 函数的默认参数
 */
let addFunc3: addFunction = (arg1: number, arg2: number, arg3 = 10 ) => arg1 + arg2 + arg3
addFunc3(1, 2)

const handleData = (arg1: number, ...arg: number []): number =>  {
  return arg1 + arg.reduce((a, b) => a + b, 0)
}

/**
 * 函数重载
 */
function overloaded(arg: number): number[]
function overloaded(arg: string): string[]

function overloaded(arg: any): any[] {
  if (typeof arg === 'string') {
    return arg.split('')
  } else {
    return Array.from({length: arg}, (_, index) => index + 1)
  }
}

console.log(overloaded(12))
console.log(overloaded('12'))
