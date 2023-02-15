var http = require ('http')

http.createServer(function(req, res){
    res.end("mensagem direcionada")
}).listen(8081)

console.log("servidor está ativo!")