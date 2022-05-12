/* 
  ES中都是通过定义函数 及函数的原型对象来去实现的类型
  自从ES2015开始 就可以使用class 关键词 去声明一个 类型 
  这种独立定义类型的语法 相比较之前函数的方方式更容易理解 解构更加清晰
*/

function Person(name){
  this.name = name
}
Person.prototype.say = (name)=>{
  console.log(`hey, my name is ${name}`);
}

let myName = new Person()
myName.say('tom')