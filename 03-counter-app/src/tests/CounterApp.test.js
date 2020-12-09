import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp test', () => {

    let renderOutput;

    beforeEach(() => {

        renderOutput = shallow(<CounterApp value={0} />);

    })

    test('Should be equal to snapshot', () => {

        // shallow should be render the Component with the assigned values in test
        const renderOutput = shallow(<CounterApp value={0} />);

        expect(renderOutput).toMatchSnapshot();

    })

    test('Should show default value of 100', () => {

        // shallow should be render the Component with the assigned values in test
        const renderOutputCien = shallow(<CounterApp value={100}/>);

        // trim remove the spaces. without strim the output is <Space>100<Space>
        const outputValue = renderOutputCien.find('h2').text().trim();

        expect(outputValue).toBe('100');

    })

    test('Should increase the value of +1 button', () => {

        //const btn1 = renderOutputButton.find('button').at(2);
        // btn1 value is <button>+</button>

        const renderOutputButton = shallow(<CounterApp value={0}/>);
        renderOutputButton.find('button').at(2).simulate('click');
        const counterText = renderOutputButton.find('h2').text();

        expect(counterText).toBe('1');

    })

    test('Should decrease the value og -1 button', () => {

        const renderOutputButton = shallow(<CounterApp value={0}/>);
        renderOutputButton.find('button').at(0).simulate('click');
        const counterText = renderOutputButton.find('h2').text();

        expect(counterText).toBe('-1');

    })

    test('Should set reset value', () => {

        const renderOutput= shallow(<CounterApp value={100}/>);

        renderOutput.find('button').at(2).simulate('click');
        renderOutput.find('button').at(2).simulate('click');
        renderOutput.find('button').at(1).simulate('click');
        const counterText = renderOutput.find('h2').text();

        expect(counterText).toBe("100");

    })

})
