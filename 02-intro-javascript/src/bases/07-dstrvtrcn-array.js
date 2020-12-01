const personajes = ['Goku', 'Veggeta', 'N18'];
const [, , selector] = personajes;
console.log(selector);

const returnArray = () => {
    return ['ABC', '123'];
}
const [numeros, letras] = returnArray();
console.log(letras, numeros);

// Tarea
// El primer valor del arr se llama nombre
// Se llamara setNombre

const useState = (valor) => {
    return [valor, ()=>{console.log(`hola mundo`)}];
}

//const [nombre, functionHi] = useState('Goku');
//console.log(nombre);
//functionHi();

/*
 *Lo siguiente es equivalente a lo anterior
 *Selecciona la posicion 1 (en este caso en la funcion que genera `hola mundo`)
 *Ejecuta la funcion (en este caso es functionHi)
 */

const arr = useState('Goku');
console.log(arr[0]);
arr[1]();
