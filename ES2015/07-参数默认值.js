/* 
  参数默认值
  为函数设置默认值
*/

// 1. 函数形参 设置默认值
function foo(enable) {
  enable = enable === undefined ? true : enable
  console.log(enable)
}
foo('ss')
// 2. 设置默认值的参数 需要 放在函数最后一位 
function bar(value,parms={}){
  console.log(value,parms);
}
bar('val')