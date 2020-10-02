// function Point (x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.getPosition = function () {
//   return "x: "+ this.x + "y: "+ this. y
// }

// const p = new Point(10,20)
// console.log(p)
// console.log(p.getPosition())

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getPosition () {
    return `( ${this.x}, ${this.y} )`
  }
}

const p = new Point(12,34)
// console.log(p.getPosition())
// console.log(p.hasOwnProperty('x'))
// console.log(p.hasOwnProperty('getPosition'))
// console.log('getPosition=>', Object.getPrototypeOf(p).hasOwnProperty('getPosition'))
// console.log(Reflect.ownKeys(p))

class Info {
  constructor(age) {
    this._age = age
  }
  set age (value) {
    console.log('age is ==>',value)
    this._age = value
  }
  get age () {
    return this._age
  }
}

// const info = new Info(19)
// console.log(info)
// info.age = 20

const C = class {
  constructor() {}
}

const c = new C()

/** 
 * 静态方法 
 */

// const Point = class P{
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   getPosition () {
//     return `( ${this.x}, ${this.y} )`
//   }

//   static getClassName () {
//     return Point.name
//   }
// }

// console.log(Point.getClassName())       // P

/**
 * 实例属性其他写法
 * 需要扩展 babel-loader
 */

class Circle {
  // z = 0
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

const circle = new Circle(10,20)
// console.log('circle',circle)

/**
 *  es6只有静态方法， 没有静态属性
 *  但是 可以用其他方式 实现
 */


class A {
  static z = 19
  constructor(x) {
    this.x = x
  }
}
A.y = 12

const a = new A(11)
// console.log(a)
// console.log(A.y)
// console.log(A.z)     // 提案中

/** 
 * 私有方法
 * 目前es6 并没有提供私有的方法 和属性
 */
 
const s = Symbol.for('s')
class B {
  #z
  constructor(z) {
    this.#z = z
  }
  [s] () {
    return 'I am a symbol'
  }
  getZvalue () {
    return this.#z
  }
}

const b = new B(123)
// console.log(b)
// console.log(b.z)
// console.log('==>',b.getZvalue())
// console.log('==>',b[s]())
 
/** 
 * new.target 
 */

// class Parent {
//   constructor() {
//     if(new.target === Parent) {
//       throw new Error('不能实例化')
//     }
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super()
//   }
// }
// // const p1 = new Parent()   // Error
// const c1 = new Child()

/**
 * es5 的继承
 */

function Food () {
  this.type = 'food'
}
Food.prototype.getType = function () {
  return this.type
}

function Vegeables (name) {
  Food.call(this)
  this.name = name
}

Vegeables.prototype = Object.create(Food.prototype)
Vegeables.prototype.constructor = Vegeables

const v = new Vegeables('tomato')
// console.log(v.getType())

/**
 * es6 的继承
 */

// class Parent {
//   constructor (name) {
//     this.name = name
//   }
//   getName () {
//     return this.name
//   }
//   static getClassName () {
//     return this.name
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }

// const child = new Child('zhangsan', 18)
// console.log(child)
// console.log(Child.getClassName())     // Child
// console.log(Object.getPrototypeOf(Child) === Parent)  // true 

/** 
 * super 
 * 既可以作为函数使用，也可以作为对象使用
 * 作为函数， 代表父类的构造函数 constructor。  作为函数只能在 子类的 constructor中使用
 * 作为对象，在子类的普通方法中指向 父类的 原型对象
 *         在 子类的静态方法中指向 父类
 */
 
class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
Parent.getType =  () => {
  return 'this is Parent Type'
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  getParentName () {
    return `name: ${super.name}, type: ${super.getType}, getName: ${super.getName()}`
  }
  static getParentType () {
    return `name: ${super.name}, type: ${super.getType()}, getName: ${super.getName}`
  }
}

const child = new Child('zhangsan', 18)
console.log(child.getParentName())
// name: undefined, type: undefined, getName: zhangsan
console.log(Child.getParentType())
// name: Parent, type: this is Parent Type, getName: undefined


// es5 先创建子构造函数的 实例 this， 再将父构造方法的 方法，属性，添加到 this上
// es6 先从父类取到 实例 this，再调用super函数之后。将子类的属性 方法 添加到this上。 