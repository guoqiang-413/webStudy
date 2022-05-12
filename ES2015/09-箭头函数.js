/* 
  箭头函数
  使用箭头函数 可以使我们代码更简洁 
  箭头函数的this 谁调用 this就指向谁
  在需要自己定义 this的情况下 可以使用 箭头函数来避免使用 自定义 this
*/
const { log } = console
const obj = {
  name:'tom',
  // setTime(){
  //   console.log(this.name);  
  // }
  setTime:()=>{
    log(this.name);
  },
  [Math.random()]:[]
}
obj.setTime()

/* 
  对象字面量
  计算属性名：[]   在这个计算属性名里面 可以使用任意的表达式 而这个表达式的结果会作为对象的属性名
*/

log(obj);

/* 
  Object.assign 方法
  用后面对象中的属性 去覆盖第一个对象 
*/
const sourrcel = {
  a:123,
  b:123
}
const target = {
  a:456,
  c:456
}
const bar = {
  d:456,
  e:456
}
// const result = Object.assign(target , sourrcel)
const result = Object.assign(target , sourrcel,bar)
// log(target)
// log(result,sourrcel)

const mesObj = {
  name:'tom',
  age:18
}
// 生成一个新对象
function newObj(obj){
  const funObj = Object.assign({},obj)
  funObj.name = 'xxx'
  return funObj
}
log(newObj(mesObj),mesObj)
