export const types = {
  GET_ALL_NEWS: 'GET_ALL_NEWS',
  GET_ALL_NEWS_SUCCESS: 'GET_ALL_NEWS_SUCCESS',
  GET_ALL_NEWS_FAIL: 'GET_ALL_NEWS_FAIL',
  GET_ALL_SPORTS: 'GET_ALL_SPORTS',
  GET_ALL_SPORTS_SUCCESS: 'GET_ALL_SPORTS_SUCCESS',
  GET_ALL_SPORTS_FAIL: 'GET_ALL_SPORTS_FAIL',
  GET_ALL_FASHIONS: 'GET_ALL_FASHIONS',
  GET_ALL_FASHIONS_SUCCESS: 'GET_ALL_FASHIONS_SUCCESS',
  GET_ALL_FASHIONS_FAIL: 'GET_ALL_FASHIONS_FAIL',
};
const action = (type: string, payload) => ({type, payload});
export const newsAction = {
  getALLNews: (payload: any) => action(types.GET_ALL_NEWS, payload),
  getALLNewsSuccess: (payload: any) =>
    action(types.GET_ALL_NEWS_SUCCESS, payload),
  getALLNewsFail: (payload: any) => action(types.GET_ALL_NEWS_FAIL, payload),
};
export const sportAction = {
  getALLSports: (payloay: any) => action(types.GET_ALL_SPORTS, payloay),
  getALLSportsSuccess: (payload: any) =>
    action(types.GET_ALL_SPORTS_SUCCESS, payload),
  getALLSportsFail: (payload: any) =>
    action(types.GET_ALL_SPORTS_FAIL, payload),
};
export const fashionAction = {
  getALLFashions: (payloay: any) => action(types.GET_ALL_FASHIONS, payloay),
  getALLFashionsSuccess: (payload: any) =>
    action(types.GET_ALL_FASHIONS_SUCCESS, payload),
  getALLFashionsFail: (payload: any) =>
    action(types.GET_ALL_FASHIONS_FAIL, payload),
};
