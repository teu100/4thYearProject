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
            <div style={{display: 'flex', alignItems: 'stretch'}}>
              <div>
                <CompanyCharts />
                
              </div>
              <div>
                <TaskDueSoon />
              </div>
              

              
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