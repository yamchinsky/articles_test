
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';





import { getArticle } from '../../redux/article/article.operations';
import { getAllArticles } from '../../redux/article/article.selectors';

import Article from '../Article/Article';
import './ArticlesList.scss'

const ArticlesList = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getArticle());
    }, [dispatch]);


    const allArticles = useSelector(getAllArticles);

    
    const newArr = [];
    const filteredArr = allArticles.filter(item => { 
      if(item.source.id !==null) {
        return newArr.push(item);
      }

     return null;
    })
   


    console.log("filteredArr", filteredArr)

    return(
       
        <ul className='ArticlesList'>

            {filteredArr.map((article, index)=>(
                <li  className='ArticlesList__item' key={index}>  
                <Article
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
                content={article.content}
                author={article.author}
                source={article.source}
                id={article.source.id}
                
                url={article.url}/>
                </li>
            ))}
         
            
        </ul>
    )
}

export default ArticlesList;