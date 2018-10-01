import * as types from './actionTypes';
import Converter from '../controllers/converter';

let converterClass= new Converter();

export function updateConversionFrom(selectedItem, converter){
    return function (dispatch){
        let from={type:selectedItem.type,name:selectedItem.name};
        dispatch(updateConversionFromSuccess(from));
        
        let resultConversion=converterClass.convert(from,
                                                    converter.to,
                                                    converter.amount);
        dispatch(convertSuccess(resultConversion));
    };
}

export function updateConversionTo(selectedItem, converter){
    return function (dispatch){
        let to={type:selectedItem.type,name:selectedItem.name};
        dispatch(updateConversionToSuccess(to));
        let resultConversion=converterClass.convert(converter.from,
                                                    to,
                                                    converter.amount);
        dispatch(convertSuccess(resultConversion, converter));
    };
}

export function updateConversionAmount(amount, converter){
    return function (dispatch){
        dispatch(updateConversionAmountSuccess(amount));
        let resultConversion=converterClass.convert(converter.from,
                                                    converter.to,
                                                    amount);
        dispatch(convertSuccess(resultConversion));
    };
}

export function convert(from, to, amount){
    return function (dispatch){
        let converter= new Converter();
        let resultConversion=converter.convert(from,to,amount);
        dispatch(convertSuccess(resultConversion));
    };
}

  //NOTE: This methods make easier to test reducers and clearly see the different dispachers.
  export function updateConversionFromSuccess(from){
    return {type : types.UPDATE_CONVERSION_FROM, from};
  }
  export function updateConversionToSuccess(to){
    return {type : types.UPDATE_CONVERSION_TO, to};
  }
  export function updateConversionAmountSuccess(amount){
    return {type : types.UPDATE_CONVERSION_AMOUNT, amount};
  }
  export function convertSuccess(result){
    return {type : types.UPDATE_CONVERSION_RESULT, result};
  }