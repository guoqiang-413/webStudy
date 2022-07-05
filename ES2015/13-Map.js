/*
 * @Author: guoqiang
 * @Date: 2022-06-03 12:40:26
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-14 19:11:40
 * @FilePath: \基础\ES2015\13-Map.js
 * Copyright (c) 2022, All Rights Reserved. 
 */
/* 
  Map 数据结构
  Map 和 object 的区别是  Map 能以任意字符的 作为数值的键 而 对象只能以字符作为键
  set 设置数据 map.set(key,value)
  get 获取数据 map.get(key)
  has 判断是否存在当前键（key） map.has(key)
  delete 删除当前键（key） map.delete(key)
  clear 清空所有的值 map.clear()
  
*/
const { log } = console
const obj = {}
 
// obj[ture] = 'value'
// obj[123] = 'value'
// obj[{a:1}] = 'value'

// log(Object.keys[obj])

const m = new Map()
const tom = {name:'tom'}
m.set(tom,90)
m.set(8,80)
m.set({a:1},10)
log(m)
log(m.get(tom))
log(m.has(tom))

m.forEach((val,key)=>{
  log(val,key)
})