import React, {Component} from "react";

import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../index.css';




function myNavBar() {

        return(
            <div>
                <div className="myNavBarCSS">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="/task">Tasks</a></li>
                        <li><a href="/users">User's</a></li>
                        <li><a href="/companyDetails">Company Details</a></li>
                    </ul>
                </div>
            </div>
        );
    
}


export default myNavBar;
