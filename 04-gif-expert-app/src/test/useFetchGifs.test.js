import {useFetchGifs} from "../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Test on useFetchGifs', () => {

  test('Should return initial state', async() => {

    const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Jake'));
    const {data, loading} = result.current;
    await waitForNextUpdate();


    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })



  test('Should return an array of imgs and the loading must be false', async() => {

    const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Jake'));
    await waitForNextUpdate();
    const {data, loading} = result.current;


    expect(data.length).toBe(3);
    expect(loading).toBe(false)
  })



})
