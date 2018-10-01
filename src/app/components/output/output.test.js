import React from 'react';
import NumberFormat from './';
import {shallow} from 'enzyme';

describe('loading an Input component', ()=>{



    it('renders an Input without crashing', () => {
        shallow(<NumberFormat  />);
    });
});