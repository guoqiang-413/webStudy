function ajax(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

async function  main() {
  try {
    const api = await ajax('../api/api.json')
    return api
    console.log(api);
    const user = await ajax('../api/user.json')
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
const prm = main()
prm.then((res)=>{
  console.log(res,'回调');
})
/* 
function* main() {
  try {
    const api = yield ajax('../api/api.json')
    console.log(api);
    const user = yield ajax('../api/user.json')
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}


const g = main()
const handLeResult = function (result) {
  if (result.done) return
  result.value.then(data => {
    handLeResult(g.next(data))
  },error=>{
    g.throw(error)
  })
}
handLeResult(g.next())
 */

// 优化 
function co(generator) {
  var g = generator()
  const handLeResult = function (result) {
    if (result.done) return
    result.value.then(data => {
      handLeResult(g.next(data))
    },error=>{
      g.throw(error)
    })
  }
  handLeResult(g.next())
}
// co(main)

// 使用generator 方案  让异步调用再次回归到扁平化
 
