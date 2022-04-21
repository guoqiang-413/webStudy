function ajax(url){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.responseType = 'json'
    xhr.onload = function(){
      if(this.status === 200){
        resolve(this.response)
      }else{
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

// promise 需要连续请求多次 错误用法
// 这种嵌套使用的方式 就是使用 promise 最常见的错误 
ajax('./xxx.json').then(function(res){
  ajax(res.url).then(function(res){
    ajax(res,url).then(function(){

    })
  })
})

// 正确用法 借助 Promise .then 方法链式调用的特点 尽量的去保证异步任务的扁平化
/* 
  Promise 对象的 then 方法会返回一个全新的 Promise 对象 所以说我们才可以使用链式调用的方式去添加 then 方法
  后面的 then 方法就是在为上一个 then 返回的 Promise 注册对应的回调 
  前面 then 方法中的回调函数的返回值会作为后面 then 方法回调的参数 
  如果回调中返回的是 Promise 那后面 then 方法的回调会等待它的结束
*/
ajax('../api.json').then((res)=>{
  console.log(111);
}).then((res)=>{
  console.log(222);
  return ajax('../api.json')
}).then((res)=>{
  console.log(333);
  console.log(res);
  return 'foo'
}).then((res)=>{
  console.log(res);
})