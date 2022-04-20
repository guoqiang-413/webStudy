/* 
  lodash 中的组合函数
    lodash 中的组合函数 flow() 或者 flowRight() 它们都可以组合多个函数
    flow() 是从左到右执行
    flowRight() 是从右到左执行 使用更多一些
*/
// const commpores = (...args) => value =>args.reverse().reduce((acc, fn) => fn(acc), value)

// lodash 中的组合函数 flow() flowRight() 使用
// const _ = require('loadsh')
// 返回数组中的 reverse 方法

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()
// flowRight 是从右到左执行 
// const f = _.flowRight(toUpper,first,reverse) 
const f = commpores(toUpper, first, reverse)
console.log(f(['one', 'tow', 'three']))

// 实现 flowRight 内部原理
// 接收传入函数
function commpore(...args) {
  // 最终返回的函数要对数据做处理 
  return function (value) {
    /* 数组的 reduce 方法 对数组中的元素去执行一个由我们传入的方法 并汇总成一个单个的结果返回  */
    /*
      在这里依次调用传入的函数 因为flowRight方法是从右至左依次执行 对数组进行反转
      反转之后 需要对我们传入的值 value 依次累计做处理 , reduce 中acc 是当次传入的值 处理完成后 
      调用 fn 再去对当前的值去做处理 
      reduce 接收两个参数，reduce（处理值，初始值）

    */
    return args.reverse().reduce(function (acc, fn) {
      return fn(acc)
    }, value)
  }
}

// 优化当前的commpore方法
function commpores(...args) {
  return (value) => args.reverse().reduce((acc, fn) => fn(acc), value)
}
// 优化
// const commpores = (...args) => value =>args.reverse().reduce((acc, fn) => fn(acc), value)






