const activo = true;

// if (activo){
//  mensaje = 'Activo';
// } else {
//	mensaje = 'Inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null;

// Lo siguiente es equivalente a:
// if (activo){
//  mensaje = 'Activo';
// }
const mensaje = activo && 'Activo';

console.log(mensaje);
