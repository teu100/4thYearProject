import React, {Component} from "react";

import { Container} from 'react-bootstrap'

import logo from './download.png';



export class CompanyDetails extends Component {

    constructor(props){
        super(props);
        this.state={comp:[],isLoaded:false,error: null}
    }

    componentDidMount(){
        fetch("https://localhost:5001/api/Company?id=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            comp: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    // refreshList(){
    //     fetch('https://localhost:5001/api/Company?id=1')
    //     .then(response=> response.json())
    //     .then(data => 
    //         {
    //         this.setState({comp:data})
    //         }
    //         );
    // }

    


    render(){

        const {comp,isLoaded, error} = this.state;        
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded){
              return <div>Loading...</div>
        }
        else{
            console.log(comp);
            return(
                <div>
                    <Container>
                        <h1>Company Details </h1>
                        <div class="CompanyDetails">
                            <div class="companyText">
                                <div>
                                    <dl>
                                        <dt>Company Name</dt>
                                        <dd>{comp.companyDetails.compName}</dd>       
                                        <dt>address Line 1</dt>
                                        <dd>{comp.companyAddress.addressLine1}</dd>
                                        <dt>address Line 2</dt>
                                        <dd>{comp.companyAddress.addressLine2}</dd>
                                        <dt>City/Town</dt>
                                        <dd>{comp.companyAddress.cityName}</dd>
                                        <dt>State</dt>
                                        <dd>{comp.companyAddress.county}</dd>
                                        <dt>Country</dt>
                                        <dd>{comp.companyAddress.country}</dd>
                                        <dt>Eircode</dt>
                                        <dd>{comp.companyAddress.eircode}</dd>
                                    </dl>
                                </div>
                                
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
}

export default CompanyDetails;