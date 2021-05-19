import {types} from './action';
const initState = {
  allBooks: [],
};
export const reducerBooks: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_BOOKS: {
      return {...state, allBooks: []};
    }
    case types.GET_ALL_BOOKS_SUCCESS: {
      return {...state, allBooks: payload};
    }
    case types.GET_ALL_BOOKS_FAIL: {
      return {...state, allBooks: payload};
    }
  }
  return state;
};
