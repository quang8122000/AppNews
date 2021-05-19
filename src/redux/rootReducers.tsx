import {combineReducers} from 'redux';
import {reducerNews} from '../redux/News/reducer';
import {reducerBooks} from '../redux/Books/reducer';
import {reducerSearch} from '../redux/SearchArticle/reducer';
export default combineReducers({
  news: reducerNews,
  books: reducerBooks,
  search: reducerSearch,
});
