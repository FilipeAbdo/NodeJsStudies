var http = require("http");

http.createServer(function(req, resp){
    resp.end("<h1>Bem vindo ao meu site!</h1><h4>www.guiadoprogramador.com</h4>");
}).listen(80);

console.log("Meu servdor está rodando!")