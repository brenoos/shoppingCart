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
          .set('data', fromJS([]));
      });
    case ProductsTypes.INCREMENT_PRODUCT:
      return state.update('data', list =>
        list.update(
          list.findIndex((item: any) => item.get('id') === action.payload.id),
          (item: any) => item.update('quantity', (value: number) => value + 1)
        )
      );
    case ProductsTypes.DECREMENT_PRODUCT:
      return state.update('data', list =>
        list.update(
          list.findIndex((item: any) => item.get('id') === action.payload.id),
          (item: any) => item.update('quantity', (value: number) => value - 1)
        )
      );
    default:
      return state;
  }
};

export default reducer;
