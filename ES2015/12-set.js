/* 
  Set 生成数组方法
  Set.size 获取数据长度
  Set.has('x') 查询是否包含当前数据
  Set.delete() 删除当前数据
  Set.clear()
*/
const { log } = console
const s = new Set()
s.add(1).add(2).add(3)
const reslut = Array.from(s)
// log(s.size)
// log(s.has(10))
// log(s.delete(4))
log(s.clear())
log(s)
// log(reslut)