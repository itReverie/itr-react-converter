import React from 'react';
import Card from '.';
import {shallow, mount} from 'enzyme';
import Units from '../../../controllers/units';
import NumberFormat from 'react-number-format';

let units= new Units();
let onItemChanged = jest.fn();
let onInputChanged = jest.fn();

describe('loading a Card component', ()=>{
    beforeEach(() => {
        onItemChanged=jest.fn();
        onInputChanged=jest.fn();
      });

    it('renders an output Card without crashing', () => {
        shallow(<Card  id="to"
                        title="To"
                        type="output"
                       options={units.loadEtherUnits()}
                       onItemChanged={onItemChanged}
                       onInputChanged={onInputChanged}
                       defaultValue={{value:18, label:"wei"}}/>);
    });

    it('renders an input Card with an input text', () => {
        const wrapper = mount(<Card  id="from"
                        title="From"
                        type="input"
                       options={units.loadEtherUnits()}
                       onItemChanged={onItemChanged}
                       onInputChanged={onInputChanged}
                       defaultValue={{}}/>);

        wrapper.find(NumberFormat).first().simulate('change');
        expect(onInputChanged).toHaveBeenCalledTimes(1);
    });
   
});