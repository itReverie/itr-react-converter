import * as types from './actionTypes';
import Units from '../controllers/units';

export function loadConversionUnits(){
    return function (dispatch){
        let units= new Units();
        dispatch(loadConversionUnitsSuccess(units.loadEtherUnits()));
    };
}

export function loadConversionCurrencies(){
    return function (dispatch){
        let units= new Units();
        dispatch(loadConversionUnitsSuccess(units.loadEtherUnits()));
    };
}

export function onChangeConversionUnit(conversionUnitSelected){
    return function (dispatch){
        dispatch(onChangeConversionUnitSuccess(conversionUnitSelected));
    };
}


  //NOTE: This methods make easier to test reducers and clearly see the different dispachers.
  export function loadConversionUnitsSuccess(conversionUnits){
    return {type : types.LOAD_CONVERSION_UNITS, conversionUnits};
  }
  export function onChangeConversionUnitSuccess(conversionUnit){
    return {type : types.CHANGE_CONVERSION_UNIT, conversionUnit};
  }
