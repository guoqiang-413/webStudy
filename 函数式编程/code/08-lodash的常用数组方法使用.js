// 引入lodash (引入之前 需要初始化一个 package.json文件)
// first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require("loadsh")

let array = ["lishengli","yaoma","shouyi"]

// first last 获取数组第一个和最后一个
console.log(_.first(array));
console.log(_.last(array));
// toUpper 转成大写  reverse 数组倒序
console.log(_.toUpper(array));
console.log(_.reverse(array));

// each == foreach
let r = _.each(array,(item,index)=>{
  console.log(item,index);
})
console.log(r);