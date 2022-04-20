// 函数组合 要满足结合律（associativity）
  /* 
     也就是说 我们要把三个函数组合成一个函数 我们可以先组合前两个函数 也可以先组合后两个函数 它们结果都是一样的 这就是结合律 
  */
// let fn = commpore(c,g,h)
// let associativity = commpore(commpore(c,g),h) === commpore(c,commpore(g,h)) //true

/* associativity 案例 */
const _ = require('loadsh')


// flowRight 是从右到左执行 
// const f = _.flowRight(_.toUpper,_.first,_.reverse)
// const f = _.flowRight(_.flowRight(_.toUpper,_.first),_.reverse)
const f = _.flowRight(_.toUpper,_.flowRight(_.first,_.reverse ))
console.log(f(['one', 'tow', 'three']))
