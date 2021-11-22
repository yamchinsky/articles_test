import axios from 'axios';
import {
  getArticleRequest,
  getArticleSuccess,
  getArticleError,
  getArticleIdRequest, 
  getArticleIdSuccess,
  getArticleIdError,

  
} from './article.actions';



// GET @ /article
const getArticle = () => async (dispatch) => {
  dispatch(getArticleRequest());

  try {
    
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=92f6e0a3a09f47caa020a93589fff6ab");
  
    dispatch(getArticleSuccess(data));
    
  } catch (error) {
    dispatch(getArticleError(error.message));
  }
};

// GET @ /article/:id

const getArticleById = (id) => async dispatch => {
  dispatch(getArticleIdRequest());

  try {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=92f6e0a3a09f47caa020a93589fff6ab`);

    dispatch(getArticleIdSuccess(data));
  } catch (error) {
    dispatch(getArticleIdError(error.message));
  }


}



export { getArticle, getArticleById};