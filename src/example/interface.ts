interface NameInfo {
  firstname: string,
  lastname: string
}

const getFullName = ({firstname, lastname}: NameInfo): string => {
  return `${firstname} ${lastname}`
}

/**
 * 可选属性
 */
interface Vegetable {
  color ?: string,
  readonly type: string,
  [prop: string]: any
}

const getVegtables = ({ color, type}: Vegetable): string => {
  return `a ${color ? color : ""} ${type}`
}

console.log(getVegtables({
  // color: "red",
  type: "tomoto",
}))

/**
 * 多余属性检查
 */
// getVegtables({
//   color: "red",
//   type: "tomoto",
//   size: 12,
// })

// 1. 使用类型断言
getVegtables({
  // color: "red",
  type: "tomoto",
  size: 12,
} as Vegetable)

// 2. 使用索引签名
// interface xxxx {
//   [prop: string]: any
// }

// 3.类型兼容性
const a =  { color: "red", type: "tomoto", size: 12 }
getVegtables(a)

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
 * 函数结构
 */
interface AddFuncInter {
  (num1: number, num2: number): number
}
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
  const c = ()=>  {c.count ++ }
  c.count = 0
  return c
}


