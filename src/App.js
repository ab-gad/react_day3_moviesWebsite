import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './routs/Home';
import Login from './routs/Login';
import Movie from './routs/Movie';
import Register from './routs/Register';
import Navbar from './components/Navbar';
import Search from './routs/Search';

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
            <Route path="/search" component={Search}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
