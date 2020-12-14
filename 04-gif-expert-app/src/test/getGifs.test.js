import {getGifs} from "../helpers/getGifs";

describe('Pruebas con get gifs', () => {

  test('Should give  elements work', async() => {

    const gifs = await getGifs('Jake');

    expect(gifs.length).toBe(3);

  })

  test('Should give  elements work', async() => {

    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);

  })

})
