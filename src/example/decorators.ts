
function setProps (target) {
  console.log('target')
}
function decortorsFactory1(value: string) {
  console.log('a')
  return (target) => {
    console.log('1', value)
  }
}
function decortorsFactory2(value: string) {
  console.log('b')
  return (target) => {
    console.log('2', value)
  }
}
function decortorsFactory3(value: string) {
  console.log('b')
  return (target) => {
    console.log('3', value)
  }
}


@setProps
@decortorsFactory1('zhangsan')
@decortorsFactory2('zhangsan')
@decortorsFactory3('zhangsan')
class Parentw {
  constructor(public name: string) {

  }
}

// 装饰器求值
// 类中不同声明上的装饰器将按以下规定的顺序应用：

// 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
// 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员。
// 参数装饰器应用到构造函数。
// 类装饰器应用到类。
console.log('--------------类装饰器--------------')
function addName (constructor: new() => any) {
  constructor.prototype.name = 'symboll'
}
@addName
class D {}

interface D {
  name: string
}
const d = new D()
console.log(d.name)

console.log('--------------方法装饰器--------------')
function enumerables(bool: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(
      // target,
      // propertyKey,
      // descriptor
    )
    descriptor.enumerable = bool
  }
}

class Greeter {
  constructor(public age: number) {}

  @enumerables(true)
  public getAge(): number {
    return this.age
  }
}

const greeter = new Greeter(12)

for (const key in greeter) {
  console.log('key=>', key)
}


console.log('--------------访问符饰器--------------')

class Greeter2 {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  @enumerables(false)
  get name() {
    return this._name
  }
  set name(val) {
    this._name = val
  }
}

const greeter2 = new Greeter2('zhangsan')
for (const key in greeter2) {
  console.log('key==>', key)
}

console.log('--------------参数饰器--------------')

function printPropertyKey(target: any, propertyKey: string) {
  console.log(propertyKey)
}
class Greeter3 {

  @printPropertyKey
  public greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }
  public greet() {
  }
}
