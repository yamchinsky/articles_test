
import { useDispatch, useSelector } from 'react-redux'
import { filterArticle} from '../../redux/article/article.actions';
import { getFilter } from '../../redux/article/article.selectors';




import '../SearchForm/SearchForm.scss'

const SearchForm = () => {
  const dispatch = useDispatch();
  const value= useSelector(getFilter);

  const onChange = e => dispatch(filterArticle(e.target.value));



	return (
		<div>
			<div className="SearchForm">
				<input
					className="SearchForm-input"
					value={value}
					name="name"
                    onChange={onChange}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search..."
				/>
 
				<button type="submit" className="SearchForm-button">
					<span className="SearchForm-button-label">Search</span>
				</button>
			</div>
		</div>
	)
}

export default SearchForm
