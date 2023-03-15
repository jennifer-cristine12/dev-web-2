const express = require (express)
const app = express

    app.get("/", function(req,res){
        res.send("Pagina Principal")
    })

    app.listen(8081, function(){
        console.log("Servidor ativo")
    })