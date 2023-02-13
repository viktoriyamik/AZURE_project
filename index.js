const PORT = process.env.PORT || 3000;
var http = require("http");

//Create server object
http
    .createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write('<fiqure><img src="https://strongloop.com/blog-assets/2014/01/threading_node.png" style="width:600px;height:300px">');
        response.write("Source:https://strongloop.com");
        response.end(""); //End response
    })
    .listen(PORT); //The server object listens on port