import { createSelector } from "reselect";

const getAllArticles = state => state.article.articles;

const getFilter = state => state.article.filter;


const getVisibleArticles = createSelector(
  [getAllArticles, getFilter],
  (article, filter) => {
    
    const normalizedFilter = filter.toLowerCase();

    return article.filter(({ title}) => (
   
    title.toLowerCase().includes(normalizedFilter)
    
    )
    
    );
  },
);





export {
  getAllArticles,
  getFilter,
  getVisibleArticles


};