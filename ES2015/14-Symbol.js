/*
 * @Author: guoqiang
 * @Date: 2022-06-03 12:40:26
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-14 19:11:31
 * @FilePath: \基础\ES2015\14-Symbol.js
 * Copyright (c) 2022, All Rights Reserved. 
 */
/* 
  Symbol 主要作用就是为对象添加独一无二的属性名
*/
// shared.js
const { log } = console
// const cache = { }

// // a.js

// cache['foo'] = parseInt(Math.random()*10)
// log(cache['foo'])

// // b.js
// cache['foo'] = 123
// log(cache['foo'])

const name = Symbol()
const person = {
  [name] :'tom',
  say(){
    log(this[name])
  }
}

// log(person.say())

/* 
 for of 是一种数据同意遍历方式 拿到是是每一个元素 不是下标
 break 终止循环
*/

// for of 遍历数值 
const arr = [100,200,300,400]
// for (const item of arr) {
//   log(item)
//   if(item > 100){
//     break
//   }
// }

arr.forEach(val=>{
  log(val)
  if(val<=100){
   log(arr.some((s)=>s))
   log(arr.every(e=>e),'e')
  }
})

// for of 遍历 set
const s = new Set(['foo','bar'])
for (const item of s) {
  log(item)
}

// for of 遍历 Map
const m = new Map()
m.set('foo',123)
m.set('bar',456)
// for (const item of m) {
//   log(item)
// } 
for (const [key,val] of m) {
  log(key,val)
}