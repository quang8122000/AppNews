import {isEmpty} from 'lodash';
import {types} from './action';
const initState = {
  allArticle: [],
  isLoading: false,
  isStopLoadMore: false,
};
export const reducerSearch: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_ARTICLE_SUCCESS: {
      return {
        ...state,
        allArticle: payload?.typeLoadMore
          ? [...state.allArticle, ...payload?.data]
          : payload.data,
        isStopLoadMore: isEmpty(payload.data) ? true : false,
        isLoading: false,
      };
    }

    case types.GET_ALL_ARTICLE_FAIL: {
      return {...state, allArticle: [], isLoading: false};
    }
    case types.SET_LOADING:
      return {...state, isLoading: payload};
  }
  return state;
};
