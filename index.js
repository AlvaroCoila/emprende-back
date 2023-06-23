//const dotenv = require('dotenv')
//dotenv.config()

require('dotenv').config()

const { log } = require("console")
//Declarar una variable con la palabra const
 
const http = require("http")
//Declarar una variable con la palabra const
// "requiere" es un función que solo existe en node JS - nativo 
// "import"  es una función nueva de JS
const exportFromAnother = require('./another')
console.log({exportFromAnother})

const { CLIENT_RENEG_LIMIT } = require("tls")
const { doesNotThrow } = require("assert")

function requestController ()
{
// logica de nuestra funcion 
console.log("Hola Mundo!!!")
}
//configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(process.env.PORT, function(){
console.log("APLICACION CORRIENDO EN PUERTO:  "+ PORT)

})