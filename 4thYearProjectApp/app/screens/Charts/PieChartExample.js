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
      chartPress(chartPress){
        if(chartPress.toString() === "Todo"){
          this.props.navigation.navigation.navigate('Tasks',
            {screen: 'Tasks', 
            params :{
              screen: 'Todo'
            }});
        }
        else if(chartPress.toString() === "InProg"){
          this.props.navigation.navigation.navigate('Tasks',
            {screen: 'Tasks', 
            params :{
              screen: 'InProg'
            }});
        }
        else if(chartPress.toString() === "Done"){
          this.props.navigation.navigation.navigate('Tasks',
            {screen: 'Tasks', 
            params :{
              screen: 'Done'
            }});
        }
        else{
          console.log("ifs not working ");
        }
      }

    render() {
        const { data, isLoading } = this.state;

      //console.log("from welcome screen 1: ");
      //onPress={()=> props.navigate.push('taskEdit',toDoTasks[i])}
            const taskData = [
                {   key: 'tdCount',
                    value: data[0],
                    svg: { fill: '#3366ff', onPress: () => this.chartPress('Todo') }
                },
                {key: 'inProgCount',
                value: data[1],
                    svg: { fill: '#ffbf00', onPress: () => this.chartPress('InProg')  }
                },
                {key: 'DoneCount',
                value: data[2],
                    svg: { fill: '#33cc33', onPress: () => this.chartPress('Done')  }
                }]
 
        return (
            <PieChart style={{ height: 200 }} data={taskData} />
        )
        
    }
}

export default PieChartExample;
