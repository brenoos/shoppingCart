import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import { ProductsStateRecord, ProductsTypes } from './types';

const INITIAL_STATE: ProductsStateRecord = fromJS({
  data: [],
  error: false,
  loading: false,
});

const reducer: Reducer<ProductsStateRecord> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return state.set('loading', false);
    case ProductsTypes.LOAD_SUCCESS:
      return state.withMutations(map => {
        map
          .set('loading', false)
          .set('error', false)
          .set('data', fromJS(action.payload.data));
      });
    case ProductsTypes.LOAD_FAILURE:
      return state.withMutations(map => {
        map
          .set('loading', false)
          .set('error', true)
          .set('data', []);
      });
    default:
      return state;
  }
};

export default reducer;
