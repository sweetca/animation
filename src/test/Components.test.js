import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Spheres from '../components/Spheres';
import Sphere from '../components/Sphere';

const testProps = () => {
    return {
        spheres: [{
            x: 0,
            y: 0,
            r: 1,
            id: 1,
            vector: {x: 0, y: 0},
            color: '#ccc',
            mc2: 1
        }]
    };
};

describe('Component', () => {

    it('App should renders without crashing', () => {
        shallow(<App />);
    });

    it('Sphere should renders without crashing', () => {
        const props = testProps();
        shallow(<Sphere {...props}/>);
    });

    it('Spheres should renders without crashing', () => {
        let props = testProps();

        let enzymeWrapper = shallow(<Spheres {...props}/>);
        const objProps = enzymeWrapper.find('Sphere').props();
        expect(objProps.x == props.spheres[0].x).toBe(true);

        props.spheres = null;
        enzymeWrapper = shallow(<Spheres {...props}/>);
        expect(enzymeWrapper.find('text').text()).toBe('Try to click anywhere several times ...');
    });
});
