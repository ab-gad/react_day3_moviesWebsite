import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './routs/Home';
import Login from './routs/Login';
import Movie from './routs/Movie';
import Register from './routs/Register';
import Navbar from './components/Navbar';
import Search from './routs/Search';
import PaginationPage from './routs/PaginationPage';

function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
            <Route path="/movie/:id" component={Movie} exact />
            <Route path="/search" component={Search} exact/>
            <Route path="/movies/:catigory/:pageNum" component={PaginationPage} exact/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
