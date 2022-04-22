console.log('global start') 
setTimeout(()=>{
  console.log('setTimeout ');
},0)
Promise.resolve()
  .then(()=>{
    console.log('promise');
  }) 
  .then(()=>{
    console.log('promise 2');
  })
  .then(()=>{
    console.log('promise 3');
  })
console.log('global end');