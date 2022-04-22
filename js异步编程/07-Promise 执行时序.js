/* console.log('global start') 
setTimeout(()=>{
  console.log('setTimeout ');
},0)
Promise.resolve()
  .then(()=>{
    console.log('promise');
    setTimeout(()=>{
      console.log('setTimeout1');
    },0)
  }) 
  .then(()=>{
    console.log('promise 2');
  })
  .then(()=>{
    console.log('promise 3');
  })
console.log('global end'); */

// 
setTimeout(()=>{
  var a = '1'
  setTimeout(()=>{
    var b = '2'
    setTimeout(()=>{
      var c = '3'
      console.log(a+b+c);
    },10)
  },10)
},10)



Promise.resolve('1')
.then((val)=>{
  var name = '2'
  return val + name
})
.then(val=>{
  var c = '3'
  return val + c
})
.then(val=>{
  console.log(val);
})

