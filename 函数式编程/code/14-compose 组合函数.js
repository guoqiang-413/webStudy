function compose(f,g){
  return function(val){
    return f(g(val))
  }
}

//3. 当它执行完以后会返回一个中间结果 并且把中间结果返回给下一个函数处理
function reverse(array){
  return array.reverse()
}

//4. 最后一个函数会将处理后的最终结果返回 这就是函数组合
function first(array){
  return array[0]
}

//1. 函数组合 可以让我们把多个函数 组合生成一个新函数
const list = compose(first,reverse)
//2. 在执行过程中 我们把参数传递给执行的第一个函数 
// console.log(list([1,2,3,4]));
