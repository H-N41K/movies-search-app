import { HashRouter, Route, Switch } from 'react-router-dom';
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
    <HashRouter>
      <Header />
      <div className="app">
        <Container>
        <Switch>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies} />
          <Route path='/series' component={Series} />
          <Route path='/search' component={Search} />
        </Switch>
        </Container>
      </div>
      
      <SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;