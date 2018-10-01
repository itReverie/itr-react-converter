import conversionUnitsReducer from './conversionUnits';
import initialState from './initialState';
import * as conversionUnitActions from '../actions/conversionUnitActions';
import {conversionUnitsMock} from '../mocks/conversionUnitsMock';

describe('calling conversion units reducer', () => {
  
    it('should load conversion units array LOAD_CONVERSION_UNITS', () => {
    const action = conversionUnitActions.loadConversionUnitsSuccess(conversionUnitsMock);

    const newState = conversionUnitsReducer(initialState.conversionUnits, action);

    const result=Object.values(newState);

    expect.assertions(4);
    expect(result.length).toEqual(7);
    expect(result[0]).toHaveProperty('label');
    expect(result[0]).toHaveProperty('value');
    expect(result[0]).toHaveProperty('type');

  });


});
