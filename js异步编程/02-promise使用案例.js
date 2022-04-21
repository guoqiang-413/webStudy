// Promise 封装 ajax
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
ajax('../api.json').then(function(res){
  console.log(res);
},function(err){
  console.log(err);
})