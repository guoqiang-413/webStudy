/* 
  proxy 专门为对象设置访问代理器
  Proxy('需要代理的目标对象','代理的处理对象')
  代理的处理对象：
    通过 get方法来监视属性访问
      get 方法接收两个值  get(目标对象, 访问的属性)
    通过 set方法来监视设置属性
      set 接收三个参数 set(目标对象,访问属性，修改的值)
*/
const { log } = console
const pramsObj = {
  name: 'tom',
  age: 18
}

const prosn = new Proxy(pramsObj, {
  get(target, val) {
    // log(target , val)
    // 判断是否有当前属性 如果没有返回默认值 
    // log(val in target)
    return val in target ? target[val] : '对象没有当前属性'
  },
  set(target, parms, val) {
    // log(Number.isInteger(val))
    // log(target,parms,val)
    if (parms === 'age' && !Number.isInteger(val)) {
      throw new TypeError('The current value does not have one type Number')
    }
    target[parms] = val
  }
})
// log(prosn.xxx)
prosn.age = 16


/* 
  Proxy 对比 defineProperty
  Proxy更好的支持对于数组对象的监视
  重写数组的操作方法
  Proxy 是以 非入侵的方式监管了对象的读写
*/
// 1。 如何使用 proxy 对象去监视数组
const list = []

const listProxy = new Proxy(list,{
  set(target,parms, val){
    log('targetVal',parms,val)
    target[parms] = val
    return true
  }
})

listProxy.push(111)
// log(listProxy,list)