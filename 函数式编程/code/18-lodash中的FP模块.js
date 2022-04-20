/* 
  lodash / fp
    lodash 的 fp 模块提供了实用的对函数式编程友好的方法
    提供了不可变的 auto-curried iteratee-first data-last 的方法
*/
// const fp = require('loadsh/fp')
// const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
// console.log(f('NEVER SAY DIE'));

/* 
  lodash 和 lodash/fp 模块 map方法的区别
  lodash 中 map 方法接收的参数是三个 map(value:处理的参数,index:索引,array:数组)
  lodash/fp 中 map 方法 接收参数 只有一个 就是当前处理的元素
*/
// const _ = require('loadsh')
// console.log(_.map(['20','25','10'],parseInt));
const fp = require('loadsh/fp')
console.log(fp.map(parseInt,['20','25','10']));