import {ofType} from 'redux-observable';
import {types, newsAction, sportAction, fashionAction} from './action';
import {$axios} from '../../configs/api';
import {catchError, mergeMap} from 'rxjs/operators';
export const getALLNews = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_NEWS),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          '/svc/topstories/v2/home.json?api-key=pQp050sos2Q3am97OK9Y05UeAlwR9rq0',
        )
        .then((rs: any) => {
          const {data} = rs;
          const _dataMain = data.results?.filter((item, index) => index <= 10);

          return newsAction.getALLNewsSuccess(_dataMain);
        })
        .catch((err: any) => {
          {
            console.log(err, 'err');
            return newsAction.getALLNewsFail(err);
          }
        });
    }),
  );
};
export const getALLNewsSports = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_SPORTS),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/svc/topstories/v2/sports.json?api-key=pQp050sos2Q3am97OK9Y05UeAlwR9rq0`,
        )
        .then((rs: any) => {
          const {data} = rs;
          const _dataMain = data.results?.filter((item, index) => index <= 10);
          return sportAction.getALLSportsSuccess(_dataMain);
        })
        .catch((err: any) => {
          {
            console.log(err, 'err');
            return sportAction.getALLSportsFail(err);
          }
        });
    }),
  );
};
export const getALLNewsFasions = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_FASHIONS),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/svc/topstories/v2/fashion.json?api-key=pQp050sos2Q3am97OK9Y05UeAlwR9rq0`,
        )
        .then((rs: any) => {
          const {data} = rs;
          const _dataMain = data.results?.filter((item, index) => index <= 10);
          return fashionAction.getALLFashionsSuccess(_dataMain);
        })
        .catch((err: any) => {
          {
            console.log(err, 'err');
            return fashionAction.getALLFashionsFail(err);
          }
        });
    }),
  );
};
