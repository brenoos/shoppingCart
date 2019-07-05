import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import { CartStateRecord, CartTypes } from './types';

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
    case CartTypes.INCREMENT_ITEM:
      return state.update('data', list =>
        list.update(
          list.findIndex((item: any) => item.get('id') === action.payload.id),
          (item: any) => item.update('quantity', (value: number) => value + 1)
        )
      );
    case CartTypes.DECREMENT_ITEM:
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
