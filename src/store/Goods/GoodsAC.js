import { SET_CATEGORIES_LIST, GET_CATEGORIES_LIST, LOAD_CATEGORIES_LIST } from './GoodsAT';

export const setCategoriesListAC = (payload) => ({
  type: SET_CATEGORIES_LIST,
  payload,
});

export const loadCategoriesListAC = (payload) => ({
  type: LOAD_CATEGORIES_LIST,
  payload,
});

export const getCategoriesListAC = (payload) => ({
  type: GET_CATEGORIES_LIST,
  payload,
});
