let presupuesto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    return nuevoPresupuesto >= 0 && !isNaN(nuevoPresupuesto) ? presupuesto = nuevoPresupuesto : -1;
}
function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto() {
    // TODO
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
