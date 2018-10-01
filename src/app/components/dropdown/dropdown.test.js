import React from 'react';
import Dropdown from './';
import {shallow, mount} from 'enzyme';
import Units from '../../../controllers/units';

let units= new Units();
let onItemChanged = jest.fn();

describe('loading a Dropdown component', ()=>{
    beforeEach(() => {
        onItemChanged=jest.fn();
      });

    it('renders a Dropdown without crashing', () => {
        shallow(<Dropdown  options={units.loadEtherUnits()}
                            onItemChanged={onItemChanged}
                            defaultValue={{value:18, label:"wei"}}/>);
    });

});