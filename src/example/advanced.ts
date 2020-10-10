
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

// 1. 要使用implements修饰的时候，要用接口。
 