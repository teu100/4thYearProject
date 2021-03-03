import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth() 
  
  var currentUserT


  function getCurrentUser(){
    if( currentUser == null){
      currentUserT = "no user"
    }
    else{

    }
  }
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" /> 
      }}
    ></Route>
  )
}