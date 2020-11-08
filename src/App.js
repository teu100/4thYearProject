import React from 'react';


import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//user experience
//azure -api to azure -install component (node module)
//focus on css and drag and drog

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
import dragAndDropPage from './pages/DragAndDrop.jsx';


function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/task" component={taskPage} />
      <Route exact path="/users" component={usersPage}/>
      <Route exact path="/drag" component={dragAndDropPage}/>
      <Route exact path ="/404" component={pageNotFound}/>
      <Redirect to="/404"/>
    </Switch>
  </Router>
}



export default App;