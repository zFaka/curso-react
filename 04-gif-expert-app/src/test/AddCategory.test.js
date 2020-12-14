
import {shallow} from 'enzyme';
import React from 'react';
import {AddCategory} from '../components/atoms/AddCategory';

describe('Testing AddCategory', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  })

  test('Should return a func', () => {

    expect(wrapper).toMatchSnapshot()})

  //test('Should change textarea', () => {

    //const input = wrapper.find('input');
    //const value = 'loquesea';
    //input.simulate('change', {target: {value:value}});

    //expect(wrapper.find('p').text().trim()).toBe(value)

  //})

  test('Should not post info with submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).not.toHaveBeenCalled();

  })

  test('Should call setCategories and clean textarea', () => {

    const value = 'Jake';

    // inputChange simulation
    wrapper.find('input').simulate('change', {target:{value:value}}); 

    // submit simulation
    wrapper.find('form').simulate('submit', {preventDefault(){}});

    // call setCategories
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // clean inputValue 
    expect(wrapper.find('input').prop('value')).toBe('');

  })

})
