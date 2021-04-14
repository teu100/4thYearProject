import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


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
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+date)
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
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+date)
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
      

    render() {

 
        return (
            <>
            </>
        )
        
    }
}

export default PieChartExample;
