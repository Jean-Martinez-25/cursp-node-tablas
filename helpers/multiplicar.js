var colors = require('colors');
const fs = require('fs');
const crearArchivo = async(valor, veces, listar)=>{
    try {
        let salida = ''
        for(let i = 1; i <= veces; i++){
            salida += (`${valor} x ${i} = ${valor * i}\n`)
        }
        if(listar){
            console.log("============================");
            console.log(`       tabla del: ${valor}         `);
            console.log("============================");
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${valor}.txt`,salida)
        return (`Archivo tabla-${valor}.txt`)
    } catch (error) {
        throw(error)
    }
}
module.exports = { crearArchivo }