//importamos la libreria yargs para poder manipular mejor los valores que ingresemos por consola de la siguiete forma
//con .options podemos crear un alias y podemos asignarle un tipo de valor al alias que estamos creando
//por defecto el valor que pasemos por consola como base generara en el argv o la memoria de la consola dos valores el que defiinimos en options con b y base ambos con el mismo valor
//podemos acceder de igual forma mediante su alias
const argv = require('yargs')    
    .option("b", {
        alias: 'base',
        type : 'number',
        //le agregqamos que el usuario si o si envie un valor, que no acepte nulos
        demandOption : true,
        describe : "Es la base de la tabla de multiplicar"
    }).option("v",{
        alias : 'veces',
        type: "number",
        default: 10,
        describe : "Es las veces que se repite la multiplicacion"
    }).option("l",{
        alias : "listar",
        type: "boolean",
        default: false,
    }).check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un número'
        }
        else if(isNaN(argv.v)){
            throw 'Las veces multiplicadas debe ser un número'
        }
        else{
            console.log(argv)
            return true
        }
    }).argv;
module.exports = argv;