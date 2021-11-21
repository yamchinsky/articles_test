import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { articleReducer } from './article/article.reducer';


const persistConfig = {
  key: 'article',
  storage
};

const persistArticleReducer = persistReducer(persistConfig, articleReducer);

const rootReducer = combineReducers({
  article: persistArticleReducer,
  
});

export default rootReducer;