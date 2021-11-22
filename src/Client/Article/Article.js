
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getArticleById } from '../../redux/article/article.operations';




import './Article.scss'




const Article = ({title, description, id}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  
 
  const openCurrentArticle = () => {
  dispatch(getArticleById(id));
  history.push(`/${id}`);
  };

 
    return(
      <div className='Article__item' onClick={openCurrentArticle} key={id}>
      
      
        <p className='Article__item__title'>{title}</p>
        <p className='Article__item__descheader'>Description:</p> 
        <p className='Article__item__desc'>  {description}</p>
     
      </div>
     
    )
}

export default Article;