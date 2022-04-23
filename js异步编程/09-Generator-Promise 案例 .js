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


function * main (){
  const api = yield ajax('../api/api.json')
  console.log(api);
  const user = yield ajax('../api/user.json')
  console.log(user);
}
const g = main()

const result = g.next()
console.log(result);
console.log('12');
result.value.then(data=>{
  const result2 = g.next(data)
  if(result2.done) return  //返回了 done 参数说明该生成器函数提 已经执行完毕了
  result2.value.then(data=>{
    const result3 = g.next(data)
    if(result3.done) return  
    result3.value.then(data=>{
      g.next(data)
    })
  })
})
