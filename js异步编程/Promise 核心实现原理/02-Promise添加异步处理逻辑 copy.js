/* 
  1.Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  2.Promise 有三个状态 padding 等待  fulfilled 成功  rejected 失败 padding 状态 要不就是成功的 要不就是失败的 一旦状态确定就不可更改
  3.Promise 中 resolve 和 rejected resolve 返回的是 fufilled 成功的结果  rejected 返回的是 rejected 失败的结果
  4.then 方法内部做的事情是做判断状态 如果状态是成功 就调用成功的回调 如果状态时失败的 就调用失败的回调  then 方法时定义在原型对象上的
  5.then 方法的回调函数中 有一个参数 表示对应的状态 成功就返回成功的值 失败就返回失败的值  
*/

const PADDING = 'padding';
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Mypromise {
  // constructor 是构造函数上的方法 需要传入一个 执行器 让它立即执行
  constructor(executed) {
    executed(this.resolve, this.reject)
  }
  // 先定义一个初始状态 
  state = PADDING;
  value = undefined;
  reason = undefined;
  succeedCallback = undefined;
  failCallback = undefined;
  // 成功的
  resolve = value => {
    if (this.state !== PADDING) return
    // 更改状态
    this.state = FULFILLED
    // 保存成功的值
    this.value = value
    // 判断成功的回调是否存在 存在就调用 
    this.succeedCallback && this.succeedCallback(this.value)
  }
  // 失败的
  reject = reason => {
    if (this.state !== PADDING) return
    // 更改状态
    this.state = REJECTED
    // 保存失败原因
    this.reason = reason
    // 判断失败的回调是否存在 存在就调用 
    this.failCallback && this.failCallback(this.reason)
  }
  // 判断状态
  then = (succeedCallback, failCallback) => {
    if (this.state === FULFILLED) {
      succeedCallback(this.value)
    } else if (this.state === REJECTED) {
      failCallback(this.reason)
    }else{
      this.failCallback = failCallback
      this.succeedCallback = succeedCallback
    }
  }
}

export default Mypromise