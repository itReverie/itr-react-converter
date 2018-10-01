import { combineReducers } from 'redux';
import conversionUnits from './conversionUnits';
import converter from './converter';

export default combineReducers({
    conversionUnits, 
    converter
});
