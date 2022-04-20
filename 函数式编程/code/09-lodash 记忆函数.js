// 记忆函数
const _ = require("loadsh")

function getArea(r){
  console.log(r);
  return Math.PI*r*r
}

// let r = _.memoize(getArea);
// console.log(r(2));
// console.log(r(2));
// console.log(r(2));

// 实现一个 memoize
function memoize(f){ //函数作为参数
  let cache = {}
  return  function(){ 
    //将参数转为字符串 方便取值
    let key = JSON.stringify(arguments)
    // 如果有值就直接赋值 没有就执行函数进行存储
    cache[key] = cache[key] || f.apply(f,arguments)
    return cache[key]
  }
}

// let r = memoize(getArea);
// console.log(r(2));
// console.log(r(2));
// console.log(r(2));

function fn(){
  let name = "name"
  function inteior(){
    console.log(this.name);
    console.log(name);
  }
  inteior()
}
fn()

