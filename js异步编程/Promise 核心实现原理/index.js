
/* 
  promise 是一个类 需要传入一个执行器 执行器会立即执行
  promise 有三个状态 padding 等待 fulfilled 成功 rejected 失败
  promise then 方法是在原型上的 then 里面成功了 调用成功的回调 调用失败了 就调用失败的回调
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
  succeedCallback = [];
  failCallback = [];
  // 成功的
  resolve = value => {
    if (this.state !== PADDING) return
    // 更改状态
    this.state = FULFILLED
    // 保存成功的值
    this.value = value
    // 判断成功的回调是否存在 存在就调用 
    // this.succeedCallback && this.succeedCallback(this.value)
    while(this.succeedCallback.length) this.succeedCallback.shift()(this.value)
  }
  // 失败的
  reject = reason => {
    if (this.state !== PADDING) return
    // 更改状态
    this.state = REJECTED
    // 保存失败原因
    this.reason = reason
    // 判断失败的回调是否存在 存在就调用 
    // this.failCallback && this.failCallback(this.reason)
    while(this.failCallback.length) this.failCallback.shift()(this.reason)
  }
  // 判断状态
  then = (succeedCallback, failCallback) => {
    let promose2 = new Mypromise((resolve,reject)=>{
      if (this.state === FULFILLED) {
        let x =  succeedCallback(this.value)
        resolvePromise(x,resolve,reject)
        resolve(x)
      } else if (this.state === REJECTED) {
        failCallback(this.reason)
      }else{
        // this.failCallback = failCallback
        // this.succeedCallback = succeedCallback
        this.failCallback.push(failCallback)
        this.succeedCallback.push(succeedCallback)
      }
    })
    return promose2
  }
}
function resolvePromise(x,resolve,reject){
  if(x instanceof Mypromise){
    x.then(resolve,reject)
  }else{
    resolve(x)
  }
}


const p = new Mypromise((resolve, reject) => {
  resolve('成功的')
  // reject('失败的')
});

function other(){
  return new Mypromise((resolve,reject)=>{
    resolve('other')
  })
}

p.then(value => {
  console.log(1);
  console.log(value);
  return other()
}, err => {
  console.log(err);
}).then(res=>{
  console.log(res);
})


