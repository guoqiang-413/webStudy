
/* 
  ES2015 中新增了 从数组和对象中 获取指定元素的语法 这种语法叫解构

*/
const arr = [100,200,300]
// const [ ,x , baz] = arr
// const [foo, ...rest] = arr
// const [foo] = arr
// 如果解构后的数组超出原有数组长度 后面解构添加的值 会是undefined
// const [foo,bar,baz,more] = arr
// 如果给解构的值赋一个默认值 如果数组中 没有这个值的话 我们会得到一个默认值 如果有的话 就会取数组中的值
// const [foo,bar,baz = '134',more='defult value'] = arr
// console.log(baz,more);

const path = '/foo/bar/baz'
const [,...rootdir] = path.split('/')
console.log(rootdir)