import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container} from '@material-ui/core';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
        <Switch>
          <Route path='movies-search-app/' component={Trending} exact/>
          <Route path='movies-search-app/movies' component={Movies} />
          <Route path='movies-search-app/series' component={Series} />
          <Route path='movies-search-app/search' component={Search} />
        </Switch>
        </Container>
      </div>
      
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
