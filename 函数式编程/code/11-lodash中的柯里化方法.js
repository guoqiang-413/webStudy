const _ = require("loadsh")
// lodash 中的 curry 可以把任意多参数的函数转换成一元函数
function getSum(a,b,c){
  return a+b+c
}

//  当我们调用了 lodash中的 curry 函数 它会返回柯里化以后的函数
// 这个函数调用以后 我们可以传入它所需要的所有参数之后 它会立即调用并且返回相应的值
// 如果 我们只传入了部分参数 它会返回一个新的函数 来等待传入剩余参数

let curryed = _.curry(getSum)

console.log(curryed(1,3,4));
console.log(curryed(1)(3,4));
console.log(curryed(1)(3)(4));
