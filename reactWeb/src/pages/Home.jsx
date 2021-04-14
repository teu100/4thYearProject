import React, {Component} from "react";

import CompanyCharts from '../charts/CompanyChart'
import TaskDueSoon from '../TaskDueSoon/TaskDueSoon'


export class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }




  componentDidMount(){
    fetch("https://localhost:5001/api/Count")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

  componentDidUpdate() {
    try{
    fetch('https://localhost:5001/api/Task', {mode:'cors'})
      .then(response=> response.json())
      .then(data => 
      {
        this.setState({tasks:data})
      }
      );
      } catch (error) {
        console.log(error)
      }
    }
  

  

  pieClick(entry){
    if(entry.name === "Done"){
      console.log(entry.name);
    }
  }

    
    render(){
      const { data, isLoading } = this.state;
      const chartData = [
        { name: 'To do', value: data[0] },
        { name: 'In progress', value: data[1] },
        { name: 'Done', value: data[2] }
      ];
    
      
    return(
        <body style={{display: 'flex',
          flexDirection: 'row',}}>
          <div>
            <div>
              <div>
                <CompanyCharts />
              </div>
              

              <TaskDueSoon />
            </div>
              <div className="myFooter">
                      <ul>
                          <li><a href="/">Task Managment</a></li>
                          <li><a href="https://github.com/teu100" target="_blank" rel='noreferrer'>GitHub</a></li>
                      </ul>
              </div>
            </div>
        </body>
    )
    }
}

export default homePage;