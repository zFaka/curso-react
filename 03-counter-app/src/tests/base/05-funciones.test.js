import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';
describe('Pruebas en Funciones', () => {

    test('getUser must return an object', () => {

        const userTest = {
            uid: 'ABC123', 
            username:'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);


    })

    test('getUsuarioActivo must return an object', () => {
        // getUsuarioActivo

        const {uid, username} = getUsuarioActivo();

        const userTest2 = {
            uid: 'ABC567', 
            username: username
        }

        const user2 = getUsuarioActivo();

        expect(user2).toEqual(userTest2);

    })
})
