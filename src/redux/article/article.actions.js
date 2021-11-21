import { createAction } from '@reduxjs/toolkit';

const getArticleRequest = createAction('article/getArticleRequest');
const getArticleSuccess = createAction('article/getArticleSuccess');
const getArticleError = createAction('article/getArticleError');

const getArticleIdRequest = createAction('article/getArticleIdRequest');
const getArticleIdSuccess = createAction('article/getArticleIdSuccess');
const getArticleIdError = createAction('article/getArticleIdError');



export {
  getArticleRequest,
  getArticleSuccess,
  getArticleError,
  getArticleIdRequest, 
  getArticleIdSuccess,
  getArticleIdError


};