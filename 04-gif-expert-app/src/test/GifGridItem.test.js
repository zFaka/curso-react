import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../components/atoms/GifGridItem';

describe('GifExpertApp', () => {

  const title = "Titulos";
  const url = "https://www.google.com";
  const renderOutput = shallow(<GifGridItem title={title} url={url} />);

  test('Should show component', () => {

    expect(renderOutput).toMatchSnapshot();

  })

  test('Should be equal img and alt props', () => {

    const img = renderOutput.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })

  test('Should have a p with the title inside', () => {

    const p = renderOutput.find('p');

    expect(p.text().trim()).toBe(title)

  })

  test('Should have animate__fadeIn', () => {

    const div = renderOutput.find('div');
    const className = div.prop('className');
    
    expect(className.includes('animate__fadeIn')).toBe(true);

  })

})
