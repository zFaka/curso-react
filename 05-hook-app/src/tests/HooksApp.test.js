import {shallow} from 'enzyme';
import React from 'react';
import HookApp from '../HooksApp';

describe('Test HookApp', () => {

  test('Testing component', () => {
    const wrapper = shallow(<HookApp/>);

    expect(wrapper).toMatchSnapshot();
  })

})
