export const types = {
  GET_ALL_BOOKS: 'GET_ALL_BOOKS',
  GET_ALL_BOOKS_SUCCESS: 'GET_ALL_BOOKS_SUCCESS',
  GET_ALL_BOOKS_FAIL: 'GET_ALL_BOOKS_FAIL',
};
const action = (type: string, payload) => ({type, payload});
export const booksAction = {
  getALLBooks: (payload: any) => action(types.GET_ALL_BOOKS, payload),
  getALLBooksSuccess: (payload: any) =>
    action(types.GET_ALL_BOOKS_SUCCESS, payload),
  getALLBooksFail: (payload: any) => action(types.GET_ALL_BOOKS_FAIL, payload),
};
