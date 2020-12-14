import React from 'react';
import {shallow} from "enzyme";
import {GifGrid} from "../components/molecules/GifGrid";
import {useFetchGifs} from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs')

describe('Testing GifGrid', () => {

  const category = 'Minecraft';



  test('Should render component', () => {

    useFetchGifs.mockReturnValue({
      data:[], 
      loading: true
    });

    const renderOutput = shallow( <GifGrid category={category} />);


    expect(renderOutput).toMatchSnapshot()
  })



  test('Should show items when images are load using useFetchGifs', () => {

    const gifs = [{
      id:'1', 
      title:'whaterevah', 
      url:'https://minecraft.net'
    }];

    useFetchGifs.mockReturnValue({
      data:gifs, 
      loading: false
    });

    const renderOutput = shallow(<GifGrid category={category}/>);


    expect(renderOutput).toMatchSnapshot()
    expect(renderOutput.find('p').exists()).toBe(false);
    expect(renderOutput.find('GifGridItem').length).toBe(gifs.length);
  })



})
