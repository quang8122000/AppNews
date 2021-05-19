import {ofType} from 'redux-observable';
import {booksAction, types} from './action';
import {$axios} from '../../configs/api';
import {catchError, mergeMap} from 'rxjs/operators';
export const getALLBooks = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_BOOKS),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          '/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pQp050sos2Q3am97OK9Y05UeAlwR9rq0',
        )
        .then((rs: any) => {
          const {data} = rs;
          return booksAction.getALLBooksSuccess(data.results?.books);
        })
        .catch((err: any) => {
          {
            console.log(err, 'err');
            return booksAction.getALLBooksFail(err);
          }
        });
    }),
  );
};
