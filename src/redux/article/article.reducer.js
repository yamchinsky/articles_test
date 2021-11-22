import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getArticleSuccess,
  getArticleIdSuccess,
  filterArticle

} from './article.actions';



const articles= createReducer([], {
  [getArticleSuccess]: (_, { payload }) => [...payload.articles],
  [getArticleIdSuccess]: (_, { payload }) => [...payload],

});

const filter = createReducer('', {
  [ filterArticle]: (_, { payload }) => payload,
});

const articleReducer = combineReducers({
    articles, 
    filter
});

export {articleReducer};