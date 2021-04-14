import React from 'react'
import { StyleSheet, Text, View, Button , ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements'
import { List } from 'react-native-paper';


class PieChartExample extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }

    componentDidMount() {
         var date = new Date();
         var dateString = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate(); 
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+dateString)
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
        var date = new Date();
         var dateString = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate(); 
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+dateString)
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

      tasksDueSoon(){
        let i;
        let tasksDueSoon = [];

        for (i = 0; i < this.state.data.length; i++)
        {
            tasksDueSoon.push(this.state.data[i])
        }
        return tasksDueSoon;
      }
      

    render() {
        const { data, isLoading } = this.state;
        const tasksDueSoon = this.tasksDueSoon();
        
        //console.log("Tasks : ",this.state.data)
        if(tasksDueSoon!==0 ){
            return(
                <ScrollView>
                <View>
                    {
                        tasksDueSoon.map((t, i) =>(
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Subtitle>#{tasksDueSoon[i].taskID}</ListItem.Subtitle>
                                    <ListItem.Title>{tasksDueSoon[i].taskName}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                    
                </View>
                </ScrollView>
            );
        }
        else{
            return (
                <View>
                    <Text> Hello Mateus </Text>
                </View>
            );
        }
 
        
        
    }
}

export default PieChartExample;
