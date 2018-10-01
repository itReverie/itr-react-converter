import React from 'react';
import Header from './';
import {shallow } from 'enzyme';

describe('loading a Header component', ()=>{

    it('renders a Header without crashing', () => {
        shallow(<Header  />);
    });
});