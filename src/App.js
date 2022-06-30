import Navbar from './Navbar';
import Home from './Home';
import Course from './Course';
import Login from './Login';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="">
            <Home />
          </Route>
          <Route path="/#">
            <Redirect to="/home" />
            <Home />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
