/* 
  循环添加事件实现
*/

/* 
  基础
*/
const { log } = console
var aButtons = document.querySelectorAll('button')
// log(aButtons)

/* for (var i = 0; i < aButtons.length; i++) {
  aButtons[i].onclick = ()=>{
    log(`当前点击的下标是${i}`)
  }
}
for (let i = 0; i < aButtons.length; i++) {
  aButtons[i].onclick = ()=>{
    log(`当前点击的下标是${i}`)
  }
} */
/* 
  闭包
*/
/* 
for (let i = 0; i < aButtons.length; i++) {
  (function (i) {
    aButtons[i].onclick = ()=>{
      log(`当前点击的下标是${i}`)
    }
  })(i) 
}

for (let i = 0; i < aButtons.length; i++) {
  (function (i) {
    aButtons[i].onclick = ((i)=>{
      return ()=>log(`当前点击的下标是${i}`)
    })(i)
  })(i) 
}

*/

/* 添加自定义属性 */
/* for (var i = 0; i < aButtons.length; i++) {
  aButtons[i].myIndex = i
  aButtons[i].onclick = function(){ 
   log(`当前点击的下标是${this.myIndex}`)
  }
} */


/* 事件委托 */
// document.body.onclick = (ev)=>{
//   var target = ev.target,
//   targetDom = target.tagName
//   if(targetDom === 'BUTTON'){
//     var index = target.getAttribute('index')
//     log(`当前点击的下标是${index}个`)
//   }
// }