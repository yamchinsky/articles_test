import { Redirect, Route, Switch } from "react-router";
import ArticlePage from "../pages/articlePage/ArticlePage";
import HomePage from "../pages/homePage/HomePage";




function App() {
  return (
    <div className="App">
      <Switch>
			
				<Route exact path="/" component={HomePage} />
				<Route path="/:id" component={ArticlePage} Redirect to={ArticlePage}/>
       
				<Redirect to="/" />
			</Switch>
    </div>
  );
}

export default App;
