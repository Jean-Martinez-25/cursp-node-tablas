var colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();
crearArchivo(argv.b, argv.v, argv.l)
    .then(res => console.log(colors.green(res, "creado")))
    .catch(err => console.log(colors.red.underline(err,"")));