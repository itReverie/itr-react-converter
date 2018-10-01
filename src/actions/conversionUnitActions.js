import * as types from './actionTypes';
import Units from '../controllers/units';
import currenciesApi from '../api/currenciesApi';

export function loadConversionUnits(){
    return function (dispatch){
        let units= new Units();
        let etherUnits=units.loadEtherUnits();
        return currenciesApi.loadCurrencies()
                            .then( currencies =>{

                                    let allUnitsForConversion=[...etherUnits,...currencies];
                                    dispatch(loadConversionUnitsSuccess(allUnitsForConversion));
                                })
    };
}

  //NOTE: This methods make easier to test reducers and clearly see the different dispachers.
  export function loadConversionUnitsSuccess(conversionUnits){
    return {type : types.LOAD_CONVERSION_UNITS, conversionUnits};
  }
