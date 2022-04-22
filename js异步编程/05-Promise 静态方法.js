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

/* Promise.resolve('foo').then(function (val){
  console.log(val);
})
// ⬆ 等价于 ↓
new Promise(function(resolve,reject){
  resolve('foo')
}) */


// Promise.resolve({
//   then:function(onFulfilled,inRejected){
//     onFulfilled('foo')
//   }
// }).then((val)=>{
//   console.log(val);
// })