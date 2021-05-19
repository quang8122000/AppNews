import {ofType} from 'redux-observable';
import {archiveAction, types} from './action';
import {$axios} from '../../configs/api';
import {catchError, mergeMap} from 'rxjs/operators';
export const getALLArticle = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_ARTICLE),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/svc/search/v2/articlesearch.json?begin_date=${
            act?.payload.begin_date
          }&end_date=${act?.payload.end_date}&sort=${act?.payload.sort}&page=${
            act?.payload.page || 1
          }&fq=news_desk:${
            act?.payload.nd
          }&api-key=pQp050sos2Q3am97OK9Y05UeAlwR9rq0`,
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('data', data);
          return archiveAction.getALLArticleSuccess({
            data: data.response?.docs,
            typeLoadMore: act.payload?.typeLoadMore,
          });
        })
        .catch((err: any) => {
          {
            console.log(err, 'err');
            return archiveAction.getALLArticleFail(err);
          }
        });
    }),
  );
};
