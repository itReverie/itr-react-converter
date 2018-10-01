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
    })

    it("should dispatch LOAD_CONVERSION_UNITS ", (done) => {
        const store = mockStore({conversionUnits: initialState.conversionUnits}, expectedAction);

        store.dispatch(conversionUnitActions.loadConversionUnits())
        .then(() => {
          const actions = store.getActions();
          expect(actions.length).toEqual(1);
          expect(actions[0].type).toEqual(types.LOAD_CONVERSION_UNITS);
          expect(Object.keys(actions[0].conversionUnits).length).toEqual(7);
          expect.assertions(3);
          done();
        })
        .catch(error => {
          done();
        });
    });
});