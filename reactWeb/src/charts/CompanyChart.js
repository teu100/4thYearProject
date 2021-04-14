import React, {Component} from "react";

import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'
import { PieChart, Pie, Cell } from "recharts";

import '../charts/styles.css'


const COLORS = ['#0088FE', '#FFBB28' , '#00C49F'];

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
      var chartData = [
        { name: 'To do', value: data[0] },
        { name: 'In progress', value: data[1] },
        { name: 'Done', value: data[2] }
      ];
      
    return(
        <div className="chartPie">
            <div style={{ borderRadius: '25px',
                                border: '2px solid #0088FE',
                                padding: '20px',
                                width: '350px',
                                height: '350px',
                                display: '',
                                margin: 10,
                                
                            }}>
                <div style={{float: 'left',
                                }}>
                    <h2 style={{ margin: 0,}}>Company Chart</h2>
                    <p style={{color: '#0088FE', margin: 0,}}>To Do Tasks</p>
                    <p style={{color: '#FFBB28', margin: 0, }}>In progress Tasks</p>
                    <p style={{color: '#00C49F', margin: 0, }}>Done Tasks</p>
                </div>
                <PieChart style={{float: 'right', position: 'absolute'}} width={400} height={400}>
                <Pie
                data={chartData}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                >
                {chartData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
                </Pie>
                </PieChart>
            </div>
        </div>
    )
    }
    
}

export default homePage;