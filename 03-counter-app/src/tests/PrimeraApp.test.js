import React from 'react';
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme';

describe('PrimeraApp test', () => {

    //test('Should return a "Faketah" message', () => {
    //const saludo = 'Faketah'; 
    //const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //expect(getByText(saludo)).toBeInTheDocument();
    //})

    test('Should show <PrimeraApp/> correctly', () => {

        const saludo = 'Faketah'; 
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot()

    })

    test('Should show subtitle sended by props', () => {

        const saludo = 'FAKA'; 
        const subTitulo = 'First Application'; 

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subTitulo}
            />);

        //Si fuese la busqueda por id seria .find('#idQueSeBusca')
        //Si fuese la busqueda por clases seria .find('.claseQueSeBusca')
        const textoSubtitulo = wrapper.find('p').text(); //Extrae texto dentro de p

        expect(textoSubtitulo).toBe(subTitulo)

    })

})
