/**
 * Created by liuzhe on 2017/4/15.
 */

function AA(a,b){
    this.a=a;
    this.b=b;
}
AA.prototype.add=function(){
    return this.a+this.b;
}
AA.prototype.lalal=function(){
    return this.a-this.b;
}

global.a=999;

module.exports=AA;
//这里是直接把module.exports的指向，直接指向了AA的指向，而不是像之前，添加了一个属性