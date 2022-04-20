function checkAge(min) {
  return function (age) {//
    return age >= min
  }
}
//函数有多个参数 先调用当前函数传递部分参数（这部分参数永远不变） 并且返回一个新的函数接收剩余参数
let checkAge18 = checkAge(18)
let checkAge25 = checkAge(25)
// console.log(checkAge18(20));
// console.log(checkAge25(26));

// es6 实现函数柯里化
let checkAgeEs = min => (age => age >= min )
let age18 = checkAgeEs(18)
let age25 = checkAgeEs(25)
console.log(age18(12));
console.log(age25(30));