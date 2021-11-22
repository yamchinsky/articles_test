import ArticlesList from '../../Client/ArticlesList/ArticlesList'

import FilterForm from '../../Client/FilterForm/FilterForm';
import './HomePage.scss'

const HomePage = () => {

    return(
        <div className='HomePage-container'>
         <FilterForm/>
        
           
         <ArticlesList/>
            

        </div>
    )
}

export default HomePage;