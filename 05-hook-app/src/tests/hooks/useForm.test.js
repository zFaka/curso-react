import {act, renderHook} from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe('Testing useForm', () => {

  const initialForm = {

    name:'fercha', 
    email:'fer@mail.com'
  };



  test('Should return a default form', () => {

    const {result} = renderHook(()=>useForm(initialForm));
    const [formValue, handleInputChange, reset] = result.current;


    expect(formValue)
      .toEqual(initialForm);

    expect(typeof reset)
      .toBe('function');

    expect(typeof handleInputChange)
      .toBe('function');
  })



  test('Should change form value', () => {

    const modified = {
      target:{
        name:'name', 
        value:'faka'
      }
    };

    const {result} = renderHook(
      ()=>useForm(initialForm)
    );

    const handleInputChange = result.current[1];

    act(()=>{handleInputChange(modified)});

    const [value] = result.current;

    expect(value)
      .toEqual({...initialForm, name:'faka'});
  })



  test('Should restore form using Reset', () => {

    const modified = {target:{name:'name', value:'faka'}};
    const {result} = renderHook(()=>useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange(modified)
      reset()})

    const valueAfterReset = result.current[0];

    expect(valueAfterReset).toEqual(initialForm);
  })
})
