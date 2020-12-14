import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp', () => {

  test('Should show component', () => {

    const renderOutput = shallow(<GifExpertApp />);


    expect(renderOutput).toMatchSnapshot();
  })



  test('Should show a category list', () => {

    const categories = ['Jake', 'Finn'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);


    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })



})
