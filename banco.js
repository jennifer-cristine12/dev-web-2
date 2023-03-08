const sequelize = require("sequelize")
const Sequelize = require("sequelize")
 sequelize = new Sequelize ("test", "root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao conectar: "+erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }

})
//Agendamentos.sync({force:true})

Agendamentos.create({
    nome:"Jeferson Roberto de Lima",
    endereco: "Av Aguia de Haia",
    bairro:"JD São nicolau",
    cep:88922410,
    estado:"São Paulo",
    observacao:"nenhuma"

    

    
})