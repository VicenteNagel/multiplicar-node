const { crearArchivo, mostrarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        mostrarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(e => console(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//let base = parametro.split('=')[1];


//crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//  .catch(e => console(e));