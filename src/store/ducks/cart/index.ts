import { Reducer } from 'redux';
import { fromJS, List } from 'immutable';
import { CartStateRecord, CartTypes, ProductOnCartRecord } from './types';

const INITIAL_STATE: CartStateRecord = fromJS({
  data: [],
});

const reducer: Reducer<CartStateRecord> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_ITEM:
      return state.update('data', list =>
        list.push(
          fromJS({
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            quantity: 1,
          })
        )
      );
    default:
      return state;
  }
};

export default reducer;
