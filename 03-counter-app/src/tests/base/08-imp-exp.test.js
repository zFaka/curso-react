import {getHeroeById, getHeroesByOwner} from '../base/08-imp-exp.test';

describe('Prueba en funciones de Heroes', () => {
    test('should return a hero by id', () => {

        const id = 1;
        const returnHero = getHeroeById(id);

        console.log(returnHero);

        //expect(returnHero).toBe(id);
    })
    test('should return a hero by owner name', () => {
        const returnHeroOwner = getHeroesByOwner;
        const owner = 'DC';

        //expect(returnHeroOwner).toBe(owner);
    })
})
