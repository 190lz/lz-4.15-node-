/**
 * Created by liuzhe on 2017/4/15.
 */


//var m2=require('./02.服务器端模板的调用测试模板.js');
// //m2在这里引入的是一个对象，所以要在对象上调用这个方法就可以了
//m2.showInfo();

var m3=require('./04.通过module.exports导出构造函数细节.js');
var m4=new m3(4,5);
console.log(m4.add());
console.log(m4.lalal());
console.log(a);