import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

 
class Weather extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          weather: [],
          isLoading: true,
          date: new Date(props.dueDate),
        };
      }

    componentDidMount() {
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Dublin,IE&key=7ea117bbbe88411bb2f7300b30194679')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ weather: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

      compareDates(){
       console.log(this.state);
      }


      

    render() {

            return(
                <this.compareDates />
            )
        
    }

      
        
    }


export default Weather;