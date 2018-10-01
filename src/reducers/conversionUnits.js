import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function conversionUnitsReducer(state = initialState.conversionUnits, action)
{
  switch (action.type) {
    case types.LOAD_CONVERSION_UNITS: {
      return   action.conversionUnits;
    }

    default:
      return state;
  }
}
