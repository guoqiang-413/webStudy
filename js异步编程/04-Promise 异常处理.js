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

// onRejected 实际上就是为 promise 中的异常去做一些处理 ， 
// ajax('../api.json').then(function onFulfilled(val){
//   console.log(val);
// },function onRejected(err){
//   console.log(err);
// })

// .catch() 处理异常
// ajax('../api.json').then(function(res){
//   console.log(res);
// }).catch(function(error){
//   console.log(error);
// })

// .catch 其实就是 then(unfefind,function(){})
ajax('../api.json').then(function(res){
  console.log(res);
  return ajax('../xxx.json')
}).catch(function(error){
  return error
  console.log(error);
}).then((res)=>{
  console.log(res);
})