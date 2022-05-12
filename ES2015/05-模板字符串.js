/* 
  模板字符串和 传统定义字符串的区别
  1.传统字符串 不支持换行 如果需要换行 我们需要用 \n 这种字符来表示 而在模板字符串中 支持多行字符串 
  模板字符串还支持 通过插值表达式的方式 在字符串中去嵌入都对应的数值
*/
const { log } = console
// const str = ' hello es2015 this is a string'
// const name = 'tom'
// log(name)
// const mag = `hey , ${name}`
// log(mag)

/* 
  带标签的模板字符串 
  这种标签函数的作用 对模板字符串进行加工  或者是检查模板字符串当中存在不安全字符等一些需求
*/
const age = 18
const name = 'tom'
const gender = false
function myTagFunc(string ,value,gender){
  // log(string,value,age,'sss')
  // return 124
  const sex = gender?18:24
  return string[0]+value+string[1] + sex
}

const result = myTagFunc`hey, ${name} is ${gender}`
log(result)

