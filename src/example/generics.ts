/**
 * 泛型
 */

const getArray  = <T> (value: T, times = 5): T[] => {
  return new Array(times).fill(value)
}

getArray<number>(10, 3).map((item) => item.toFixed())

const getArray2 = <T, U>(param1: T , parma2: U, times: number = 5): Array<[T, U]> => {
  return new Array(times).fill([param1, parma2])
}

getArray2(13, 'ab').forEach((item) => {
  console.log(item[0].toFixed())
  console.log(item[1].length)
})

/**
 * 泛型在类型定义中的使用
 */
let getArray3: <T>(arg: T, times: number) => T[]
getArray3 = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

/**
 * 接口 / 类型别名 定义泛型
 */
type GetArray1 = <T>(arg: T, times: number) => T[]
interface GetArray2 {
  <T>(arg: T, times: number): T[],
}
interface GetArray3 <T> {
  (arg: T, times: number): T[],
  array: T[]
}

/**
 * 泛型约束
 */
interface ValueWithLength { length: number }

const getArray4 = <T extends ValueWithLength>(arg: T, times = 5): T[] => {
  return new Array(times).fill(arg)
}

getArray4([1, 2, 3], 5)
getArray4('123', 5)
getArray4({  length: 12, name: '', }, 5)

/**
 * 在泛型约束中使用类型参数
 */
const getProps = <T, K extends keyof T>(object: T, propName: K ) => {
  return object[propName]
}

getProps({ name: 'zhangsan', sex: 'male' }, 'name')
// getProps({ name: 'zhangsan', sex: 'male' }, 'age')
// keyof 类似 联合类型
