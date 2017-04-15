/**
 * Created by liuzhe on 2017/4/15.
 */
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Conter-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>hello word</p>');
}).listen(3000);
console.log('HTTP server is listing at port 3000.');