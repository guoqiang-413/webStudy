  // 纯函数 相同的输入始终得到相同的输出
  let array = [1,2,3,4,5]
  console.log(array.slice(0,2));
  console.log(array.slice(0,2));
  console.log(array.slice(0,2));

  // 不纯的函数
  console.log(array.splice(0,2));
  console.log(array.splice(0,2));
  console.log(array.splice(0,2));

  // 在函数式编程中 我们不会保留计算中间的结果 所以变量是不可变的 （无状态的）
  // 我们可以把函数执行的结果交给另一个函数去处理
  let getsum = (n1,n2)=>{
    return n1+n2
  }

  // 纯函数的副作用
  // 被污染的纯函数
  let mini = 18
  function checkAge(age){
    return age >= mini
  }


  // 纯函数(有硬编码 后续可以通过柯里化解决)
  function checkAge(age){
    let mini = 18
    return age >= mini
  }
