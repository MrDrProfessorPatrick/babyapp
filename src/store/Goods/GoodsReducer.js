import { SET_CATEGORIES_LIST, GET_CATEGORIES_LIST } from './GoodsAT';
const initialState = {
  categoriesList: [],
};

export const GoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      return state;
    case SET_CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.payload,
      };
    default:
      return state;
  }
};
