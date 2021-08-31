import SHOP_DATA from './shop.data';

const INITAIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITAIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
