import {types} from './action';
const initState = {
  allNews: [],
  allSports: [],
  allFashions: [],
  retry: false,
};
export const reducerNews: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_NEWS: {
      return {...state, allNews: [], retry: false};
    }
    case types.GET_ALL_NEWS_SUCCESS: {
      return {...state, allNews: payload};
    }
    case types.GET_ALL_NEWS_FAIL: {
      return {...state, allNews: [], retry: true};
    }
    case types.GET_ALL_SPORTS: {
      return {...state, allSports: [], retry: false};
    }
    case types.GET_ALL_SPORTS_SUCCESS: {
      return {...state, allSports: payload};
    }
    case types.GET_ALL_SPORTS_FAIL: {
      return {...state, allSports: [], retry: true};
    }
    case types.GET_ALL_FASHIONS: {
      return {...state, allFashions: [], retry: false};
    }
    case types.GET_ALL_FASHIONS_SUCCESS: {
      return {...state, allFashions: payload};
    }
    case types.GET_ALL_FASHIONS_FAIL: {
      return {...state, allFashions: [], retry: true};
    }
  }
  return state;
};
