/**
 * Created by liuzhe on 2017/4/15.
 */
function showInfo(){
    console.log(123);
}

exports.showInfo=showInfo;//相当于把这个方法公开出去，就可以在别的模块中使用
//可以通过exports导出，也可以通过module.exports导出