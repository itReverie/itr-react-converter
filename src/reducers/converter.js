import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function converterReducer(state = initialState.converter, action)
{
  let newState;
  switch (action.type) {
    case types.UPDATE_CONVERSION_FROM: {
      newState = Object.assign({},state);
      newState.from=action.from;
      return  Object.assign({}, newState);
    }
    case types.UPDATE_CONVERSION_TO: {
        newState = Object.assign({},state);
        newState.to=action.to;
        return  Object.assign({}, newState);
      }
    case types.UPDATE_CONVERSION_AMOUNT: {
      newState = Object.assign({},state);
      newState.amount=action.amount;
      return  Object.assign({}, newState);
    }
    case types.UPDATE_CONVERSION_RESULT: {
      newState = Object.assign({},state);
      newState.result=action.result;
      return  Object.assign({}, newState);
  }
    default:
      return state;
  }
}
