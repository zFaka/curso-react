import {renderHook} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/useFetch";

describe('Testing useFetch', () => {

  test('Should return default values', () => {

    const {result} = renderHook(()=>useFetch(
      `https://www.breakingbadapi.com/api/quotes/1`
    ))

    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  })



  test('Should return values after load page', async() => {

    const dataArrayed = [{"author": "Walter White","quote": "I am not in danger, Skyler. I am the danger!", "quote_id": 1, "series": "Breaking Bad"}];

    const {result, waitForNextUpdate} = renderHook(()=>useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
    await waitForNextUpdate();

    const {data, loading, error} = result.current;

    expect(data).toEqual(dataArrayed);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  })



  test('Should use errorHandler', async() => {

    const {result, waitForNextUpdate} = renderHook(()=>useFetch(`https://reqres.in/apid/users?page=2`))
    await waitForNextUpdate();
    const {data, loading, error} = result.current;

    expect(data).toEqual(null);
    expect(loading).toBe(false);
    expect(error).toBe('info doesnt load');
  })
})
