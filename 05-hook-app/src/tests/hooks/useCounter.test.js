import {act, renderHook} from "@testing-library/react-hooks";
import useCounter from '../../hooks/useCounter';

describe('Test hook', () => {

  test('Should return default values', () => {

    const {result} = renderHook(()=>useCounter());


    expect(result.current.counter).toBe(0);
    expect(typeof result.current.increase ).toBe('function');
    expect(typeof result.current.decrease ).toBe('function');
    expect(typeof result.current.reset ).toBe('function');
  })



  test('Should return 100', () => {

    const {result} = renderHook(()=>useCounter(100));


    expect(result.current.counter).toBe(100);
  })



  test('Should return 11', () => {

    const {result} = renderHook(()=>useCounter(10));
    const {increase} = result.current;

    act(() => {increase()})

    const {counter} = result.current;

    expect(counter).toBe(11)
  })



  test('Should return 09', () => {

    const {result} = renderHook(()=>useCounter(10));
    const {decrease} = result.current;

    act(() => {decrease()})

    const {counter} = result.current;

    expect(counter).toBe(9);
  })



  test('Should return 10', () => {

    const {result} = renderHook(()=>useCounter(10));
    const {decrease, reset} = result.current;

    act(() => {
      decrease()
      reset()
    })

    const {counter} = result.current;

    expect(counter).toBe(10);
  })
})
