import Navbar from './Navbar';
import Home from './Home';
import Course from './Course';
import Login from './Login';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/skill-lab" component={Home} />
          <Route path="/skill-lab/#/home" component={Home} />
          <Route path="/skill-lab/#/course" component={Course} />
          <Route path="/skill-lab/#/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
