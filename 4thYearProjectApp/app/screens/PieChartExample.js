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
        console.log("Chart was pressed", chartPress)
      }

    render() {
        const { data, isLoading } = this.state;
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
        const colours = ['blue','orange','green']
        const taskData = [data[0],data[1],data[2]];
        const pieData = taskData
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => this.chartPress(),
                },
                key: `pie-${index}`,
            }))

            const tryData = [
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
            <>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>{}</Text>

                <PieChart style={{ height: 200 }} data={tryData} />
            </>

        )
        
    }
}

export default PieChartExample;
