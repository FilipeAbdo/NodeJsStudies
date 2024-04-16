var http = require("http");

http.createServer(function(req, resp){
    var ip = require("ip");
    resp.end("<h1>Bem ao Raspberry PI 4!</h1><h4>Testing Server</h4><h4>IP is: " + ip.address() + "</h4>" );
}).listen(80);

console.log("Meu servidor está rodando!")