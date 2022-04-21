//  Promise 
const premise  = new Promise(function(resolve,reject){
  resolve(100) // 成功
  // reject(new Error('promise reject')) // 失败
})
premise.then(function(value){
  console.log(value);
},function(err){
  console.log(err);
})

console.log('end')