
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { getArticle } from '../../redux/article/article.operations';
import { useHistory, useParams } from 'react-router';
import './ArticlePage.scss'
import { getAllArticles } from '../../redux/article/article.selectors';

const ArticlePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getArticle());
  }, [dispatch]);
  const { id } = useParams();

  



  const allArticles = useSelector(getAllArticles); 



  const getArticleById = id => allArticles.find(article =>  article.source.id===id);
  

  const selectedArticleObjById = getArticleById(id);


  const { title, description, urlToImage,content, author, url} =
    selectedArticleObjById;
  const goBack = () => {
    history.goBack();
  };

    return(
      
      <div className='current-article' key={uuidv4()}>
  
      

      <div className='current-article__back' >
        <img src={urlToImage} className='current-article__img' />
      </div>

      <div className='current-article__container' onClick={() => history.push('/')}>
        
        <div className='current-article__container-about'>
          <h1>{title}</h1>
          <p>{author}</p>
          <p>{description}</p>
          <p>{url}</p>
          <p>
            <b>{content}</b>
          </p>
          
          <p style={{ marginTop: '20px' }}></p>
          
        </div>
       
      </div>
      <button
          onClick={goBack}
          className='current-article__button'
          style={{ position: 'absolute', top: 10, zIndex: 2 }}>
          Back to Homepage
        </button>
    </div>
    )
}

export default ArticlePage;