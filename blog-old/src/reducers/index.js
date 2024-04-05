import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: fromReducer
});

export default rootReducer;
