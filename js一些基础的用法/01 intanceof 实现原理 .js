/*
 * @Author: guoqiang
 * @Date: 2022-06-22 18:07:26
 * @LastEditors: guoqiang
 * @LastEditTime: 2022-06-22 18:15:17
 * @FilePath: \基础\js一些基础的用法\01 intanceof 实现原理 .js
 * Copyright (c) 2022, All Rights Reserved. 
 */
function myInstanceof (left , right){
  // 获取对象原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数上面的原型对象
  let prototype = right.prototype
  while(true){
    if(!proto) return false;
    if(proto === prototype) return true;
    // 如果没有找到 就继续从其原型上找 Object.getPrototypeOf 方法用来获取指定原型的对象
    proto = Object.getPrototypeOf(proto)
  }
}