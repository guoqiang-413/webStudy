/*
 * @Author: 国强 pgq0413@163.com
 * @Date: 2022-05-16 23:22:35
 * @LastEditors: 国强 pgq0413@163.com
 * @LastEditTime: 2022-05-17 22:18:37
 * @FilePath: \webStudy\js一些基础的用法\02-变量局部化.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 
  变量局部化 （全局 局部） 
  这样可以提高代码的执行效率（减少了数据访问时需要查找的路径）
  数据存储和读取
*/
const { log } = console;

var i,src =''
function packageDom(){
  for ( i = 0; i < 1000; i++) { 
    src+=i
  }
}
packageDom()

function packageDom(){
  let str =''
  for ( let i = 0; i < 1000; i++) {
    str+=i
  }
  log(str)
}
packageDom()