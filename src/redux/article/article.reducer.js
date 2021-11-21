import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getArticleSuccess,
  getArticleIdSuccess

} from './article.actions';



const articles= createReducer([], {
  [getArticleSuccess]: (_, { payload }) => [...payload.articles],
  [getArticleIdSuccess]: (_, { payload }) => [...payload],
 
 
});

const articleReducer = combineReducers({
    articles
});

export {articleReducer};