/**
 * Created by liuzhe on 2017/4/15.
 */

//global.console.log(132);
//console.log(456);

//console.log(process.arch);//打印的是系统的架构，是64位，还是32位
//console.log(process.argv);//打印的是一个数组，第一个参数是node的路径，第二个参数是执行文件的路径，
//argv可以获得命令执行时的参数，在node里面，如果有三个参数，数组就保存三个
//还可以选择从第几个数字开始
//console.log(process.argv[2]);//索引从0开始，到2的时候就没有了，它会输出相应的项


console.log(__dirname);//当前文件夹的路径，到当前文件夹
console.log(__filename);//当前文件的路径，到当前文件

