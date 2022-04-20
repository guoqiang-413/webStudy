// "".match(/\s+/g)//匹配字符串中是否存在空白字符
// "".match(/\d+/g)//匹配字符串中是否存在数字

const _ = require("loadsh")
const match = _.curry(function(reg,str){
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNunber = match(/\d+/g)

const filter = _.curry(function(fn,array){
  return array.filter(fn)
})

const findSpace = filter(haveNunber)
console.log(findSpace(['hello 123','hello Window']));


