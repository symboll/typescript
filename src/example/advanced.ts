
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
const v = getRandomValue()
if ( typeof v === 'string') {
  console.log(v.length)
} else {
  console.log(v.toFixed())
}
