import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

 
class Weather extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          weather: [],
          isLoading: true,
          dueDate: new Date(props.dueDate),
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
       var stringToReturn = "Loading dates";
       var i;
       if(this.state.weather.length !==  0){
        for(i = 0; i < 16; i++){
          var dateString = this.state.weather.data[i].datetime;
          var dateJS = new Date(dateString);
          var dueDateFC = new Date(this.props.dueDate);
          if(dueDateFC.getDate() === dateJS.getDate()){
            var weatherInfo = this.state.weather.data[i].weather.description;
            return weatherInfo;
          }else{
            stringToReturn = "No weather information available for that date.";
          }
        }
       }
        return stringToReturn;
      }


      

    render() {
      var stringReturn = this.compareDates();
            return(
                <Text>Weather Warning : {stringReturn}</Text>
            )
    }

      
        
    }


export default Weather;