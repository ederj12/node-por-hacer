const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        // demand:true,
        alias: 'c',
        default: true,
        desc: 'Descripción del estado de la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar', 'borra un item de la lista', opts)
    .help()
    .argv;

module.exports = {
    argv
};