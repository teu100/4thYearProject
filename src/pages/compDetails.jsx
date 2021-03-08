import React, {Component} from "react";

import { Container} from 'react-bootstrap'

import logo from './download.png';



export class CompanyDetails extends Component {

    constructor(props){
        super(props);
        this.state={comp:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44384/api/company')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({comp:data})
            }
            );
    }


    render(){

        const {comp} = this.state;
        
    return(

        <div>
            



            <Container>
                <h1>Company Details </h1>
                <div class="CompanyDetails">
                <div class="companyText">


                        
                        {comp.map(comp=>
                        <div>
                            <dl>
                            <dt>Company Name</dt>
                            <dd>{comp.compName}</dd>
                            <dt>address Line 1</dt>
                            <dd>{comp.addressLine1}</dd>
                            <dt>address Line 2</dt>
                            <dd>{comp.addressLine2}</dd>
                            <dt>City/Town</dt>
                            <dd>{comp.cityName}</dd>
                            <dt>State</dt>
                            <dd>{comp.county}</dd>
                            <dt>Country</dt>
                            <dd>{comp.country}</dd>
                            <dt>Eircode</dt>
                            <dd>{comp.eircode}</dd>
                            </dl>
                        </div>
                        )}
                        


                    </div>
                    
                    <div class="companyPicture">
                        <img src={logo} alt="companyIcon"/>
                    </div>
                </div>  

                
            </Container>

            <div className="myFooter">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="https://github.com/teu100" target="_blank" rel='noreferrer'>GitHub</a></li>
                    </ul>
            </div>

            
            </div>
    )
    }
    
}

export default CompanyDetails;