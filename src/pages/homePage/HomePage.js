import ArticlesList from '../../Client/ArticlesList/ArticlesList'
import SearchForm from '../../Client/SearchForm/SearchForm';
import './HomePage.scss'

const HomePage = () => {

    return(
        <div className='HomePage-container'>
        <SearchForm/>
           
         <ArticlesList/>
            

        </div>
    )
}

export default HomePage;