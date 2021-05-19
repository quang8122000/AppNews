import {combineEpics} from 'redux-observable';
import {getALLNews, getALLNewsSports, getALLNewsFasions} from './News/epic';
import {getALLBooks} from './Books/epic';
import {getALLArticle} from './SearchArticle/epic';
const rootEpic = combineEpics(
  getALLNews,
  getALLNewsSports,
  getALLNewsFasions,
  getALLBooks,
  getALLArticle,
);
export default rootEpic;
