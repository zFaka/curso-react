import {retornaArreglo} from '../../base/07-deses-arr';

describe('Destructuring array test', () => {
    test('Output object', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');;
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');;
    })
})
//const personajes = ['Goku','Vegeta','Trunks'];
//const [ , , p3 ] = personajes;
//console.log( p3 );

//const retornaArreglo = () =>{
//return ['ABC', 123];

//const useState = ( valor ) => {
//return [ valor, ()=>{ console.log('Hola Mundo') } ];
//}
