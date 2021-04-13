import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

 
class PieChartExample extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }

    componentDidMount() {
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }
      chartPress(chartPress){
        if(chartPress.toString() === "Todo"){
          this.props.navigation.navigate.navigate('Tasks', 
            {screen: 'Tasks',
            params :{
              screen: 'Todo'
            }
          });
        }
        else if(chartPress.toString() === "InProg"){
          this.props.navigation.navigate.navigate('Tasks', 
            {screen: 'Tasks',
            params :{
              screen: 'InProg'
            }
          });
        }
        else if(chartPress.toString() === "Done"){
          this.props.navigation.navigate.navigate('Tasks', 
            {screen: 'Tasks',
            params :{
              screen: 'Done'
            }
          });
        }
        else{
          console.log("ifs not working ");
        }
        /*This brings the User to the In progress Tab
        this.props.navigation.navigate.navigate('Tasks', 
        {screen: 'Tasks',
        params :{
          screen: 'InProg'
        }
      });*/
      }

    render() {
        const { data, isLoading } = this.state;

      //console.log("from welcome screen 1: ");
      //onPress={()=> props.navigate.push('taskEdit',toDoTasks[i])}
            const taskData = [
                {   key: 'tdCount',
                    value: data[0],
                    svg: { fill: '#0000FF', onPress: () => this.chartPress('Todo') }
                },
                {key: 'inProgCount',
                value: data[1],
                    svg: { fill: '#FFA500', onPress: () => this.chartPress('InProg')  }
                },
                {key: 'DoneCount',
                value: data[2],
                    svg: { fill: '#00FF00', onPress: () => this.chartPress('Done')  }
                }]
 
        return (
            <PieChart style={{ height: 200 }} data={taskData} />
        )
        
    }
}

export default PieChartExample;
