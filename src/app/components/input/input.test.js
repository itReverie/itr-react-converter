import React from 'react';
import Input from './';
import {shallow} from 'enzyme';

let onInputChanged = jest.fn();

describe('loading an Input component', ()=>{

    beforeEach(() => {
        onInputChanged=jest.fn();
      });

    it('renders an Input without crashing', () => {
        shallow(<Input  onInputChanged={onInputChanged}/>);
    });
});