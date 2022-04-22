// 生成器函数 在语法上 其实就是比 普通函数 多了一个 * 号
function* foo() {
  try {
    console.log('start');
    // 使用 yield 关键字 向外去返回一个值
    const res = yield 'foo'
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// 我们去调用这个生成器函数 这个函数并不会立即去执行 而是会得到一个生成器对象 一个可迭代的对象
const generator = foo()
console.log(generator);
/* 
  generator.next()  直到我们去调用这个对象的 next 方法 这个函数的函数体才会执行  在函数内部  
  next 方法在 遇到关键字 yield关键字不会像 return 一样 终止当前函数的执行 而是会暂停当前函数的执行
*/
const result = generator.next()
// 在返回的对象里面 {value: 'foo', done: false} 有一个 done 属性 表示当前的生成器是否已经全部执行完成了
console.log(result);
// generator.next('bar')
generator.throw(new Error('geberator error'))
