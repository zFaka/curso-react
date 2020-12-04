import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-Template', () => {

    test('getSaludo must return hola fernando', () => {

        const nombre = 'Fernando' ;

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);
    })

    //getSaludo must return Hola carlos if doesnt has an argument

    test('Carlos', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');

    })

})
