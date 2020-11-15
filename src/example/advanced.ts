
/**
 * 交叉类型
 */
const mergeFunc = <T, U>(arg1: T, arg2: U): T&U => {
  return Object.assign(arg1, arg2)
}

/**
 * 联合类型
 */
const getLengthFunc = (content: string | number ): number => {
  if (typeof content === 'string') {
    return content.length
  } else {
    return content.toString().length
  }
}

/**
 * 类型保护
 */
const valueList = [123, 'abc']
const getRandomValue = () => {
  const num = Math.random() * 10
  if ( num < 5) {
    return valueList[0]
  } else {
    return valueList[1]
  }
}

 // typeof 判断 string, number, boolean, symbol
 // 使用 ===
const v = getRandomValue()
if ( typeof v === 'string') {
  console.log(v.length)
} else {
  console.log(v.toFixed())
}

// instanceof
class CreatedByClass1 {
  public name: string = 'symbollee'
}
class CreatedByClass2 {
  public age: number = 12
}

const getRandomClass = () => {
  return Math.random() > 0.5 ? new CreatedByClass1() : new CreatedByClass2()
}

const c = getRandomClass()
if (c instanceof CreatedByClass1) {
  console.log(c.name)
} else {
  console.log(c.age)
}

// null / undefined
// 任何类型的子类型
let val: string| undefined = 's'
val = undefined
// 当开启"strictNullChecks": true, 可选参数会被自动加上undefined
const sum = (arg1: number, arg2?: number) => arg1 + (arg2 || 0)
// 可选属性也会加上undefined

/**
 * 类型保护类型断言
 */
const getLengths = (value: string | null): number => (value || '').length

function getSplicedStr(num?: number ) {
  function getRes(prefix: string) {
    return prefix + num!.toFixed().toString()
  }
  num = num || 0.1
  return getRes('prefix_')
}
console.log(getSplicedStr())

/**
 * 类型别名
 */
type PositionType<T> = { x: T, y: T}
interface PositionType2<T> {
  x: T,
  y: T
}

type Childs<T> = {
  context: T,
  child?: Array<Childs<T>>
}

const childs: Childs<string> = {
  context: 'zhangsan',
  child: [
    {
      context: 'lisi'
    },
    {
      context: 'wangwu'
    }
  ]
}

/**
 * 类型别名只是为其他类型取一个新的名字来引用这个类型。
 * 当他为借口起别名时，不能用于extends， implements
 */

/**
 * 接口和类型别名有时能实现同样的作用
 */
type Alias = {
  num: number
}
interface Interface {
  num: number
}

let _alias: Alias = { num: 123 }
let _interface: Interface = { num: 321 }

_alias = _interface

/**
 * 接口和类型别名的  不同使用场景
 */

// 1. 当你要定义的类型，要用于拓展，即 要使用implements修饰的时候，要用接口。
// 2. 当无法通过接口， 并且需要使用联合类型或者元组类型， 用类型别名

/**
 * 字面量类型
 * 字符串字面量， 数字字面量
 */

type Name = 'symboll'
const name: Name = 'symboll'    // 只能赋值 symboll

type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1)
}
getDirectionFirstLetter('south')

type Age = 18
interface InfoInterfaces {
    name: string
    age: Age
}
const _info: InfoInterfaces = {
    name: 'lison',
    age: 18,           // 只能是 18
}

/**
 * 枚举成员类型
 * 能够作为类型使用的枚举需要满足三个条件：
 *  1. 不带初始值的枚举成员
 *  2. 枚举成员值为 字符串字面量
 *  3. 值是数字字面量，或者带负号的数字字面量
 * 满足一个 枚举值 和枚举成员都可以 作为 类型来使用
 */

/**
 * 可辨识联合
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  height: number
  width: number
}
interface Circle {
  kind: 'circle'
  radius: number
}
type Shape = Square | Rectangle | Circle
function assertNever(value: never): never {
  throw new Error('Unexpected object: ' + value)
}
function getArea(s: Shape): number {
  switch (s.kind) {
      case 'square': return s.size * s.size; break;
      case 'rectangle': return s.height * s.width; break;
      case 'circle': return Math.PI * s.radius ** 2; break;
      default: return assertNever(s)
  }
}
