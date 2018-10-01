import * as converterActions from './converterActions';
import * as types from "./actionTypes";
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
//NOTE. redux-mock-store is being used to mock the store
import configureMockStore from 'redux-mock-store';
import {converterMock, converterMockFrom} from '../mocks/converterMock';

//STORE
const middleware = [thunk.withExtraArgument({  })];
const mockStore = configureMockStore(middleware);
describe("✓ dispacth converter actions ",  () => {

   
    it("should dispatch UPDATE_CONVERSION_FROM ", () => {
        const expectedAction = { converter :converterMockFrom, type: types.UPDATE_CONVERSION_FROM,  };

        const store = mockStore({converter: initialState.converter}, expectedAction);

        store.dispatch(converterActions.updateConversionFrom(converterMockFrom, converterMock ))
          const actions = store.getActions();

          expect(actions.length).toEqual(2);
          expect(actions[0].type).toEqual(types.UPDATE_CONVERSION_FROM);
          expect(actions[1].type).toEqual(types.UPDATE_CONVERSION_RESULT);
          expect.assertions(3);
    });

    it("should dispatch UPDATE_CONVERSION_RESULT ", () => {
        const expectedAction = { converter :converterMock, type: types.UPDATE_CONVERSION_RESULT,  };

        const store = mockStore({converter: initialState.converter}, expectedAction);

        store.dispatch(converterActions.convert(converterMock.from, converterMock.to, converterMock.amount))
          const actions = store.getActions();

          expect(actions.length).toEqual(1);
          expect(actions[0].type).toEqual(types.UPDATE_CONVERSION_RESULT);
          expect.assertions(2);
    });

});