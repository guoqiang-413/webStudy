// 把 一个字符中的首字母提取并转换成大写 使用 , 作为分隔符
  const fp = require('loadsh/fp')
  const firstLetterToUpper = fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.first,fp.toUpper)),fp.split(' '))
  console.log(firstLetterToUpper('world wild web'));