export const types = {
  GET_ALL_ARTICLE: 'GET_ALL_ARTICLE',
  GET_ALL_ARTICLE_SUCCESS: 'GET_ALL_ARTICLE_SUCCESS',
  GET_ALL_ARTICLE_FAIL: 'GET_ALL_ARTICLE_FAIL',
  SET_LOADING: 'SET_LOADING',
};
const action = (type: string, payload) => ({type, payload});
export const archiveAction = {
  getALLArticle: (payload: any) => action(types.GET_ALL_ARTICLE, payload),
  getALLArticleSuccess: (payload: any) =>
    action(types.GET_ALL_ARTICLE_SUCCESS, payload),
  getALLArticleFail: (payload: any) =>
    action(types.GET_ALL_ARTICLE_FAIL, payload),
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
};
