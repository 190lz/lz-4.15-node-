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
//������ֱ�Ӱ�module.exports��ָ��ֱ��ָ����AA��ָ�򣬶�������֮ǰ�������һ������