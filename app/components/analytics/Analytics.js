import React from 'react'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  MainContainer,
  CardContainer,
  TitleContainer,
  HeaderText,
  TitleText,
  ChartContainer,
  ChartInnerContainer,
  RoundContentContainer,
  DetailCardContainer,
  ButtonContainer,
  HeaderContainer,
  DateText} from './style.js';
  import {
    VictoryChart,
    VictoryArea,VictoryAxis,
    VictoryLine,
    VictoryVoronoiContainer,
    VictoryTooltip} from "victory-native";
    import CustomButton from '../../components/button/CustomButton';
    import RowComponent from './RowComponent.js'
    import CustomTooltip from './CustomTooltip'
    class AnalyticsScreen extends React.PureComponent {


      render() {

        return (
          <ScrollView contentContainerStyle={{paddingBottom:20,alignItems:'center',justifyContent:'center'}}>
          <CardContainer>
            <HeaderContainer>
              <HeaderText>{this.props.title}</HeaderText>
            </HeaderContainer>
            <TitleContainer>
              <TitleText>{this.props.subtitle}</TitleText>
            </TitleContainer>
            <RoundContentContainer>
              <RowComponent color={this.props.reachColor} text="Reach" />
              <RowComponent color={this.props.engageColor} text="Engagement" />
              <RowComponent color={this.props.redeemColor} text="Redeem" />
            </RoundContentContainer>
            <ChartContainer>
              <VictoryChart
                containerComponent={
                  <VictoryVoronoiContainer voronoiDimension="x"
                    labels={(d) => `y: ${d.y}`}
                    labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
                    />
                }
                >
              <VictoryAxis
                domain={[2, 10]}
                tickValues={[2, 4,6,8,10]}

                />
              <VictoryAxis dependentAxis
                domain={[0, 100]}
                />
              <VictoryArea
                style={{ data: { fill:this.props.reachColor ? this.props.reachColor : 'rgba(230,61,48,0.7)'},
                labels: {fill: 'rgba(230,61,48,0.7)'}}}
                data={[
                  { y: 20, x: 2},
                  { y: 40, x: 8},
                  { y: 60, x: 5},
                  { y: 50, x: 10},
                  { y: 25, x: 6}
                ]}
                />
              <VictoryArea
                style={{ data: { fill: this.props.engageColor ? this.props.engageColor :'rgb(230,61,48,0.3)'},
                labels: {fill: 'rgb(230,61,48,0.3)'}  }}
                data={[
                  { y: 80, x: 2},
                  { y: 47, x: 10},
                  { y: 65, x: 5},
                  { y: 55, x: 4},
                  { y: 80, x: 6}
                ]}
                />
              <VictoryLine data={[
                  { y: 10, x: 2},
                  { y: 25, x: 10},
                  { y: 20, x: 3},
                  { y: 30, x: 5},
                  { y: 35, x: 7}
                ]}
                style={{ data: { stroke:this.props.redeemColor ? this.props.redeemColor:'rgb(0,150,136)' },
                labels: {fill: 'rgb(0,150,136)'} }}
                />

            </VictoryChart>
          </ChartContainer>
          <ButtonContainer>
            <CustomButton
              fill={Theme.colors.skyBlue}
              width={280}
              text={"View All Analytics"}  />
          </ButtonContainer>

        </CardContainer>
        </ScrollView>
      )
    }
  }
  export default AnalyticsScreen;
