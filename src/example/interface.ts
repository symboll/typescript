/**
 * 接口基本用法
 */
interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({firstName, lastName}: NameInfo): string => {
  return `${firstName} ${lastName}`
}

/**
 * 可选属性
 *
 * 只读属性
 * 
 * 索引签名 【绕过多余属性检查， 其他2种方式：类型断言， 类型兼容性】
 */
interface Vegetable {
  color ?: string,
  readonly type: string,
  [prop: string]: any
}

const getVegetables = ({ color, type}: Vegetable): string => {
  return `a ${color ? color : ""} ${type}`
}

console.log(getVegetables({
  // color: "red",
  type: "tomato",
}))

/**
 * 多余属性检查
 */
// getVegetables({
//   color: "red",
//   type: "tomato",
//   size: 12,
// })

// 1. 使用类型断言
getVegetables({
  color: "red",
  type: "tomato",
  size: 12,
} as Vegetable)

// 2. 使用索引签名
// interface xxxx {
//   [prop: string]: any
// }

// 3.类型兼容性
const compatible =  { color: "red", type: "tomato", size: 12 }
getVegetables(compatible)

/**
 * 只读属性
 */
// interface xxxx {
//   readonly type: string
// }

const obj2: Vegetable = {
  type: "tomato",
}
// obj2.type = 'carrot'

interface ArrayInter {
  0: number,
  readonly 1: string
}

const arr: ArrayInter = [2, 's']
// arr[1] = 'read'


/**
 * 接口除了可以定义对象的结构，
 * 还可以定义 【函数结构】
 */
interface AddFuncInter {
  (num1: number, num2: number): number
}

// Interface has only a call signature — use
// `type AddFuncInter = (num1: number, num2: number) => number` instead. (callable-types)tslint(1) 
// 类型别名
// type AddFuncInter = (num1: number, num2: number) => number

/**
 * 索引类型
 */
// interface RoleDic {
//   [id: number]: string
// }
// const role1: RoleDic = {
//   1: 'super_admin',
// }
interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  a: 'super_admin',
  2: 'admin',
}

/**
 * 接口继承
 */
interface V {
  color: string
}

interface Tomato extends V {
  size: number
}

const tomato: Tomato = {
  color: 'red',
  size: 16,
}

/**
 * 混合类型接口
 */
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () =>  {c.count ++ }
  c.count = 0
  return c
}
