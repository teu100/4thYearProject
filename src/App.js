import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'


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
  Route,
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'

//Pages
import homePage from "./pages/Home.jsx";
import pageNotFound from "./pages/404.jsx";
import usersPage from "./pages/Users.jsx";
import taskPage from './pages/Task.jsx';
import compDetails from './pages/compDetails.jsx';
import Header from './components/Header';
import signupPage from './pages/signupPage';
import DashBoardPage from './pages/DashBoardPage'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage'

function App() {
  return (
    <div>
      <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={homePage} />
        <Route exact path='/Home' component={homePage} />
        <Route exact path='/dashboard' component={DashBoardPage} />
        <Route exact path='/task' component={taskPage} />
        <Route exact path='/users' component={usersPage} />
        <Route exact path='/companyDetails' component={compDetails} />
        <Route exact path='/signup' component={signupPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/resetpassword' component={ResetPasswordPage} />


      </Router>
    </div>
  )
}



export default App;