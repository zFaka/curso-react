import {getHeroeByIdAsync} from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Test with promises', () => {

    test('Should return hero async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            });

    });

});
