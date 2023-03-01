const express = require("express")
const app = express()

//criando uma rota para o diretorio principal
app.get("/",function(req,res){
    res.send("bem vindo ao node js")
})
app.get("/loja",function(req,res){
    res.sendFile(__dirname+"/teste.html")
})
app.get("/tcg",function(req,res){
    res.sendFile(__dirname+"/aula1.html")
})
app.get("/pokemon",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/produtos/:item",function(req,res){
    res.send("Item: "+req.params.item+"<br>Quantidade: "+req.params.quantidade)
})
app.get("/produtos/:item/:quantidade",function(req,res){
    res.send("Item: "+req.params.item+"<br>Quantidade: "+req.params.quantidade)
})
app.get("/produtos/:item/:tipo/:quantidade",function(req,res){
    res.send("Item: "+req.params.item+"<br>tipo: "+req.params.tipo+"<br>Quantidade: "+req.params.quantidade)
})


app.listen(8081, function(){
console.log("o servidor está rodando na porta 8081")})