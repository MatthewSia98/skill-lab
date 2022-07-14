import Navbar from './Navbar';
import Home from './Home';
import Course from './Course';
import Login from './Login';
import Signup from './Signup';
import CategoryPage from './CategoryPage';
import OnlineDegrees from './OnlineDegrees';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/course/:name">
            <Course />
          </Route>
          <Route exact path="/category/:col/:name">
            <CategoryPage />
          </Route>
          <Route path="/online-degrees">
            <OnlineDegrees />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
