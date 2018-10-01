import converterReducer from './converter';
import initialState from './initialState';
import * as converterActions from '../actions/converterActions';
import {converterMockFrom, converterMock} from '../mocks/converterMock';

describe('calling converter reducer ', () => {
  
    it('should UPDATE_CONVERSION_FROM ', () => {
    const action = converterActions.updateConversionFromSuccess(converterMockFrom);

    const newState = converterReducer(initialState.converter, action);

    const result=newState.from;

    expect.assertions(2);
    expect(result.type).toBe('ether');
    expect(result.name).toBe('ether');

  });

  it('should UPDATE_CONVERSION_RESULT ', () => {
    const action = converterActions.convert(converterMock);
    const newState = converterReducer(initialState.converter, action);
    const result=newState.result;
    expect(result.amount).toBe("1");
    expect(result.unit).toBe("wei");
  });


});
