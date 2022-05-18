/*
 * @Author: 国强 pgq0413@163.com
 * @Date: 2022-05-16 23:58:29
 * @LastEditors: 国强 pgq0413@163.com
 * @LastEditTime: 2022-05-17 22:18:02
 * @FilePath: \webStudy\js一些基础的用法\03-防抖节流.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/* 
  防抖节流 
  为什么需要防抖和节流
    在一些高频率事件触发的场景下 我们不希望对应的事件处理函数多次执行
  场景：
    滚动事件
    输入的模糊匹配
    轮播图切换
    点击操作
    。。。
    浏览器默认情况下都会有自己的监听事件间隔（4-6ms) 如果检测到多次事件的监听执行 
    那么久会照成不必要的资源浪费

    前置场景：多次点击界面上的按钮

    防抖：对于这个高频的操作 我们只希望执行一次 可以人为设置是 第一次或者最后一次 触发
    节流：让事件在自定义的时间内触发
*/

/* 防抖节流实现 */

/* 
  防抖函数实现 
  handle : 防抖函数
  wait : 触发时间
  immediate : true 第一次触发 false 最后一次触发
*/

function myDebounce(handle, wait, immediate) {
  if (typeof handle !== 'function') throw new Error('handle It s not a function')
  if (typeof wait === 'undefined') wait = 300
  if (typeof wait === 'boolean') {
    immediate = wait
    wait = 1000
  }
  if (typeof immediate !== 'boolean') immediate = false
  // 防抖效果就是人为的去控制函数执行的次数
  let timer = null
  return function proxy(...args) {
    let self = this,
      init = immediate && !timer;
    clearInterval(timer)
    timer = setTimeout(() => {
      timer = null
      !immediate ? handle.call(self, ...args) : null
    }, wait)
    // 如果传进来是true就立即执行
    init ? handle.call(self, ...args) : null
  }
}


/* 
  节流函数实现
*/
function myThrottle(handle,wait=400) {
  if(typeof handle !== 'function') throw new Error('handle It s not a function')
  let timer =null
  return ()=>{
    clearInterval(timer)
    log(this)
    timer = setTimeout(()=>{
      log(this)
      handle()
    },wait)
  }
}