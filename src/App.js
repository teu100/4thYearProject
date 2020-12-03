import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'

//user experience
//azure -api to azure -install component (node module)
//focus on css and drag and drog
// Make drop to database -  to remember position
// make some milestone for the cards 
// only certain roles can makes changes
// LOOK react native - to make for mobile for iterantion 2
// sunday write up what you done
// backend storage
// add people into orginasation 
// branching and merging 
// 


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import homePage from "./pages/Home.jsx";
import pageNotFound from "./pages/404.jsx";
import usersPage from "./pages/Users.jsx";
import taskPage from './pages/Task.jsx';
import compDetails from './pages/compDetails.jsx';


function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/task" component={taskPage} />
      <Route exact path="/users" component={usersPage}/>
      <Route exact path="/companyDetails" component={compDetails}/>
      <Route exact path ="/404" component={pageNotFound}/>
      <Redirect to="/404"/>
    </Switch>
  </Router>
}



export default App;