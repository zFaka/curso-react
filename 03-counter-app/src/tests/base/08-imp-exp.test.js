import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import fromHeroes from '../../data/heroes';

describe('Prueba en funciones de Heroes', () => {

    test('should return a hero by id', () => {

        const id = 1;
        const returnHero = getHeroeById(id);
        const testHero = fromHeroes.find((h) => h.id === id );

        expect(returnHero).toEqual(testHero)

    })

    test('should return undefined if doesnt exist', () => {

        const id = 9;
        const returnHero = getHeroeById(id);

        expect(returnHero).toBe(undefined);

    })

    test('should return an array with DC heroes', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        const testOwner = fromHeroes
            .filter( (jsonheroe) => jsonheroe.owner === owner );

        expect(hero).toEqual(testOwner);

    })

    test('should return an array with Marvel heroes', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        const testOwner = fromHeroes
            .filter( (jsonheroe) => jsonheroe.owner === owner );

        expect(hero.length).toBe(testOwner.length);

    })

})
