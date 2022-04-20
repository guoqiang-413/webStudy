
function getSum(a,b,c){
  return a+b+c
}

function curry(fnc){
  return function curryed(...args){
    // 判断实参和形参的个数 如果传入的参数小于实参 
    // 就返回一个函数 等待传入剩余参数
    if(args.length<fnc.length){
      return function(){ //返回一个函数
        // concat方法 合并数组 将上一次传入的参数 和 当前传入的参数
        // 合并为一个数组传入curryed方法  Array.from() 伪数组转为真实数组
        // ...args 将数组展开 将值传入方法
        return curryed(...args.concat(Array.from(arguments)))
      }
    }
    return fnc(...args)
  }
}

const curried = curry(getSum)
console.log(curried(1,2,3));
console.log(curried(1)(2,3));