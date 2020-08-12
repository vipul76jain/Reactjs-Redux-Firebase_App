import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from "./components/Home"
import Login from "./components/Login"
import Check from "./components/Check"
import Questions from "./components/Questions"
import StudentDetails from "./components/StudentDetail"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/details' component={StudentDetails} />
          <PrivateRoute exact path='/:roll_no' component={Check} />
        </Switch>
      </Router>
    );
  }
}
export default App;