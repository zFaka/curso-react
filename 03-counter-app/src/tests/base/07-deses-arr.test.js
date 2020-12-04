import {retornaArreglo} from '../../base/07-deses-arr';

describe('Destructuring array test', () => {
    test('Output object', () => {
        const xpctArr = ['ABC', 123];
            const rtrnArr = retornaArreglo();
        expect(rtrnArr)
            .toEqual(['ABC', 123])
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
