const persona = {
    nombre:'Batman', 
    edad:30, 
    clave: 'papi'
};

/*
 *const {nombre, edad, clave} = persona;
 *console.log(nombre);
 *console.log(edad);
 *console.log(clave);
 */

/*
 *const returnPersona = ({edad, id = 'clc01'}) => {
 *    console.log(edad, id);
 *}
 *returnPersona(persona);
 */

const useContext = ({clave, edad}) => {
    return {
        nombreClave: clave, 
        anios:edad, 
        latlong:{
            lat:123879, 
            long:123283
        }
    }
}
const {nombreClave, anios, latlong} = useContext(persona);
const {lat, long} = latlong;
console.log(nombreClave, anios, lat, long);
