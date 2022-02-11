// function Point (x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.getPosition = function () {
//   return "x: "+ this.x + "y: "+ this. y
// }

// const p = new Point(1,2)
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

const p = new Point(1,2)
console.log(p.getPosition())
console.log(p.hasOwnProperty('x'))
console.log(p.hasOwnProperty('getPosition'))
console.log('getPosition=>', Object.getPrototypeOf(p).hasOwnProperty('getPosition'))
console.log(Reflect.ownKeys(p))

class Line {
  constructor(point) {
    this._point = point
  }
  set point (value) {
    console.log('point is ==>',value)
    this._point = value
  }
  get point () {
    return this._point
  }
}

// const line = new Line(19)
// console.log(line)
// line.point = 20

const Triangle = class {
  constructor() {}
}

const triangle = new Triangle()

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
  z = 0
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

const circle = new Circle(10,20)
console.log('circle->',circle)

/**
 *  es6只有静态方法， 没有静态属性
 *  但是 可以用其他方式 实现
 */
class Rectangle {
  static z = 19
  constructor(x) {
    this.x = x
  }
}
Rectangle.y = 12

const rectangle = new Rectangle(11)
console.log('static props->', Rectangle.y)
console.log('static props->', Rectangle.z)     // 提案中

/** 
 * 私有方法
 * 目前es6 并没有提供私有的方法 和属性
 */
 
const s = Symbol.for('s')
class Pentagon {
  #z
  constructor(z) {
    this.#z = z
  }
  [s] () {
    return 'I am a symbol'
  }
  getZValue () {
    return this.#z
  }
}

const pentagon = new Pentagon(123)
console.log('pentagon=>',pentagon)
console.log(pentagon.z)
console.log('==>',pentagon.getZValue())
console.log('==>',pentagon[s]())
 
/** 
 * new.target 
 */
class Polygon {
  constructor() {
    console.log('new.target=>',new.target)
    console.log('new.target boolean=>',new.target === Polygon)
    if(new.target === Polygon) {
      // throw new Error('不能实例化')
    }
  }
}

class Hexagon extends Polygon {
  constructor() {
    super()
  }
}
const p1 = new Polygon()   // Error
const h1 = new Hexagon()

/**
 * es5 的继承
 */
function Food (type) {
  this.type = type
}
Food.prototype.getType = function () {
  return this.type
}

function Vegetables (type, name) { 
  Food.call(this, type)
  this.name = name
}

Vegetables.prototype = Object.create(Food.prototype)
Vegetables.prototype.constructor = Vegetables

const v = new Vegetables('vegetable  ','tomato')
console.log('v=>>', v)
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
console.log(child.getParentName())  // name: undefined, type: undefined, getName: zhangsan
console.log(Child.getParentType())  // name: Parent, type: this is Parent Type, getName: undefined


// es5 先创建子构造函数的 实例 this， 再将父构造方法的 方法，属性，添加到 this上
// es6 先从父类取到 实例 this，再调用super函数之后。将子类的属性 方法 添加到this上。 


/**
 * decorators
 */
function PrintName (target) {
  console.log(target.name)
}
@PrintName
class Greeter {
  constructor() {}
}
