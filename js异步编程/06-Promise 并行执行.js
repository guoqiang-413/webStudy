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

/* 
  实现并行请求 Promise.all() 这个方法会返回一个全新的 Promise 对象 
  当内部所有的 Promise 都完成以后  返回全新的 Promise 就会执行 
  如果说 Promise.all() 中有任何一个promise失败了 那么这个 promise就会以失败结束
*/
/* 
  var promise = Promise.all([
    ajax('../api.json'),
    ajax('../user.json')
  ])

  promise.then((val)=>{
    console.log(val);
  }) 
 */

// ajax('../api/urls.json').then((res)=>{
//   console.log(res);
//   const urls = Object.values(res);
//   const tasks = urls.map(url=>ajax(url))
//   return Promise.all(tasks)
// }).then(res=>{
//   console.log(res);
// })


// Promise.race() // 只会等待第一个结束的任务
const request = ajax('../api/api.json')
const timeout = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject(new Error('reject error'))
  }, 500);
})
Promise.race([
  request,
  timeout
]).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})