import {getImagen} from '../../base/11-async-await';

describe('Async-await test', () => {

    test('Should return url of image', async() => {

        // eslint-disable-next-line no-undef
        const url = await getImagen();

        //expect(typeof url).toBe('string');
        //The problem with this is when you recive an error, the error is a string

        expect(url.includes('https://', '.com')).toBe(true);

    })

})
