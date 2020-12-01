const persona = {
    nombre: 'Faka', 
    peso: '74', 
    direccion: {
        ciudad: 'Ditroit', 
        zip: 2000
    }
}

const persona2 = {...persona};
persona2.nombre = 'Peter';

// Lo siguiente no asigna el valor, lo que hace es linkearlo. osea,  si lo modificas, tambien se modifica el otro
// const persona2 = persona;

console.log(persona);
console.log(persona2);
