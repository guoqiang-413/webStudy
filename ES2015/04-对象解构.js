/* 
  对象解构
  对象的解构需要根据属性名 去匹配提取 而不是位置 因为数组中的数据是有下标 有顺序规则的
  而对象里面的成员是没用一个固定的顺序 所以说对象不能按照位置去提取数据
*/

const obj = {name:'zzz',age:88}
// 对象解构 通过属性名获取对象中对应的值
// const {name} = obj
// console.log(name);

// 这样会命名冲突 需要重命名去避免这样的问题出现
const name = 'tom'
// const { name } = obj 
// 左边的name 是用于匹配对象中的值 右边是我们匹配到的值的属性名称
const { name:objNmae } = obj 
console.log(objNmae)

// 简化代码  简化console.log
const {log} = console
log('foo');
log('bar');
log('vaz ');
