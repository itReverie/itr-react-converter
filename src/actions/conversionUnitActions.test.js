import * as conversionUnitActions from './conversionUnitActions';
import * as types from "./actionTypes";
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
//NOTE. redux-mock-store is being used to mock the store
import configureMockStore from 'redux-mock-store';

//STORE
const middleware = [thunk.withExtraArgument({  })];
const mockStore = configureMockStore(middleware);
describe("✓ loading conversion units action",  () => {

    const expectedAction = { conversionUnits :[], type: types.LOAD_CONVERSION_UNITS,  };

    beforeEach(() => {
      //fetch.resetMocks()
    })

    it("should dispatch LOAD_CONVERSION_UNITS ", () => {
        const store = mockStore({conversionUnits: initialState.conversionUnits}, expectedAction);

        store.dispatch(conversionUnitActions.loadConversionUnits())
          const actions = store.getActions();
          expect(actions.length).toEqual(1);
          expect(actions[0].type).toEqual(types.LOAD_CONVERSION_UNITS);
          expect(Object.keys(actions[0].conversionUnits).length).toEqual(7);
          expect.assertions(3);
    });

  //   it("should dispatch CHANGE_CONVERSION_UNIT ", () => {
  //     const store = mockStore({conversionUnits: initialState.conversionUnits}, expectedAction);
  //     let conversionUnitSelected={type:'unit',name:'wei',amount:1};
  //     store.dispatch(conversionUnitActions.onChangeConversionUnit(conversionUnitSelected))
  //       const actions = store.getActions();
  //       expect(actions.length).toEqual(1);
  //       expect(actions[0].type).toEqual(types.CHANGE_CONVERSION_UNIT);
  //       expect(Object.keys(actions[0].conversionUnit)).toEqual(Object.keys(conversionUnitSelected));
  //       expect.assertions(3);
  // });
});