import {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe('Test HeroScreen', () => {


    const history = {
        length: 10, 
        replace: jest.fn(),
        goBack: jest.fn()};



    //test('Should render the redirect component if doesnt has arguments in the url', () => {


    //// Mout enable use High Order Components

    //const wrapper = mount(
    //<MemoryRouter initialEntries={['/hero']}>
    //<HeroScreen history={history}/>
    //</MemoryRouter>);



    //expect(wrapper.find('Redirect').exists())
    //.toBe(true)
    //})

    test('Should show hero if the param exist and it is founded', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderman']}>
                <HeroScreen history={history}/>
            </MemoryRouter>);

        expect(wrapper.find('.row').exists())
            .toBe(true)
    })
})
