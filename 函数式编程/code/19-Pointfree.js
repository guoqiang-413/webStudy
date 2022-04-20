/* 
  Point Free:我们可以吧数据处理的过程定义成与数据无关的合成运算 不需要用到代表数据的那个参数 
  只要把简单的运算步骤合成到一起 在使用这种模式 我们需要定义一些辅助的基本运算函数
    不需要指明处理的数据
    只需要合成运行过程
    需要定义一些辅助的基本运算函数
*/

const fp = require('loadsh/fp')
const f = fp.flowRight(fp.replace(/\s+/g,'_'),fp.toLower)
console.log(f('hello   World'));