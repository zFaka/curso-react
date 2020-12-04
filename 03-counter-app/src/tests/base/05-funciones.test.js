import {getUser} from '../../base/05-funciones';
describe('Pruebas en Funciones', () => {

    test('getUser must return an object', () => {

        const userTest = {
            uid: 'AAA111', 
            username:'FAKA'
        }

        const user = getUser();

        console.log(user);
    })
})
