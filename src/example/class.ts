class Point {
  public x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public getPosition() {
    return `( ${this.x}, ${this.y} )`
  }
}
const p = new Point(1, 2)
// console.log(p)

/**
 * 修饰符 public private protected
 */
class Parent  {
  public name: string
  protected age: number
  private is: boolean
  constructor(name: string, age: number, is: boolean) {
    this.name = name
    this.age = age
    this.is = is
  }
  public getParentName() {
    return this.name
  }
  protected getParentAge() {
    return this.age
  }
  private getParentIs() {
    return this.is
  }
}

class Child extends Parent {
  public email: string
  protected address: string
  private phone: number

  constructor(name: string, age: number, is: boolean, email: string, address: string, phone: number) {
    super(name, age, is)
    this.setEmail(email)
    this.address = address
    this.phone = phone
  }
  public setEmail(email) {
    this.email = email
  }
  public getEmail() {
    return this.email
  }

  public getSuperInfo() {
    // 在子类的普通方法中指向 父类的 原型对象。 与es6 的表现形式一样
    console.log('super-public-name ==>', super.name)
    console.log('super-protected-age ==>', super.age)
    console.log('super-public-func-name ===>', super.getParentName())
    console.log('super-public-func-age ===>', super.getParentAge())
  }
}

const person1 = new Parent('lisi', 20, false)

const person2 = new Child('zhangsan', 19, true, 'sdada@163.com', 'hangzhou', 1508888888)

// console.log(person1)
// console.log(person1.name)
// console.log(person2.name)
// console.log(person2.email)
// person2.getSuperInfo()
// console.log('out-getParent-name=>', person2.getParentName())
// console.log('out-getParent-age==>', person2.getParentAge())

/**
 * protected 修饰 constructor
 * private   修饰 constructor
 */
class Bird {
  // private constructor() {}
  protected constructor() {}
}
class Sparrow extends Bird {     // 麻雀
  constructor() {
    super()
  }
}
const sparrow = new Sparrow()

/**
 * readonly
 */
class ReadonlyClass {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const readonlyObj = new ReadonlyClass('zhangsan')
// readonlyObj.name = 'lisi'      // error
Object.defineProperty(readonlyObj, 'name', {
  value: 'wangwu',
})
console.log('readonlyObj=>', readonlyObj, readonlyObj.name)
// console.log(readonlyObj instanceof ReadonlyClass)

/**
 * 参数属性 public protected private readonly
 */

class Params {
  constructor(public name: string) {}
}
const params = new Params('zhangsan')
// console.log(params)

/**
 * 静态属性
 */
class StaticParams {
  public static type: string = 's'
  private static getType() {
    return StaticParams.type
  }
}
// const sp = new StaticParams()
console.log(StaticParams.type)
// console.log(StaticParams.getType())   // Error

/**
 * 可选类属性
 */

class Infos {
  public name: string
  public age?: number
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
}
const infos1 = new Infos('zhangsan')
const infos2 = new Infos('lisi', 18)
const infos3 = new Infos('wangwu', 18, 'male')
console.log('infos1', infos1)
console.log('infos2', infos2)
console.log('infos3', infos3)

/**
 * 抽象类
 */

abstract class People {
  constructor(public name: string) {}
  public abstract getName(): string
  protected abstract getType(): string
}

class Man extends People {
  constructor(name: string) {
    super(name)
  }

  public getName() {
    return this.name
  }

  public getType() {
    return 'type'
  }
}

const m = new Man('zhangsan')
console.log(m)

abstract class Animal {
  public abstract type: string
  protected abstract get run(): string
  protected abstract set run(type: string)
}

class Cat extends Animal {
  public type: string
  public run: string
}

/**
 * 实例属性
 */

class Person {
  constructor(public name: string) {}
}
class Woman extends Person {
  constructor(name: string, public age: number) {
    super(name)
  }
}

const p3: Person = new Person('zhangsan')
const w: Person = new Woman('lisi', 18)

/**
 * 类的接口
 */
interface Food {
  name: string
  type: string
  // printInfo: (name: string, type: string) => void
  printInfo(name: string, type: string): void
}

const f: Food = {
  name: 'tomato',
  type: 'vegetables',
  printInfo(name: string, type: string) {
    console.log()
  },
}

class Bread implements Food {
  constructor(public name: string, public type: string) {}

  public printInfo(name: string, type: string) {
    console.log(name, type)
  }
}

/**
 * 接口继承类
 */
class Aa {
  protected name: string
}
interface Ia extends Aa {}

class Bb extends Aa implements Ia {
  // public name: string  // OK
  protected name: string = ''
}

class Cc {
  public name: string
}
interface Ic extends Cc {}
class Dd implements Ic {
  public name: string
}

/**
 * 在泛型中使用类类型
 */

const create = <T>(c: new() => T ): T => {
  return new c()
}
class St {
  constructor(public name?: string) {}
}

const st = create(St)
console.log(st)
