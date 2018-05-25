import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {MainContainer,
  LogoText,
  HeadingText,
  ShopText,
  ButtonContianer,
  IconContainer,
  SignUpButtonContainer,
  LoginButtonContainer} from './style';
  import CustomButton from '../../components/button/CustomButton';
  import CustomIcon from '../../components/icon/svgicon';
  import Card from '../../components/giftCardPopup/giftCard';
  import SignupScreen from '../signup/signupScreen';
  import LoginScreen from '../login/LoginScreen';
  import CreateWalletScreen  from '../createWallet/CreateWalletScreen';
  import ForgotPasswordScreen from '../forgotpassword/ForgotPasswordScreen';
  class HomeScreen extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }

  constructor(){
    super();
    this.state = {
     modalVisible: false,
     modalName:''
   }
  }

   setModalVisible = (visible,modal) => {
     this.setState({modalVisible: visible,modalName:modal});
   }
    render () {
      return(
        <ImageBackground resizeMode="cover" source={require('../../../assets/images/1_background_img.jpg')} style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <CustomIcon name="logo"/>
          <HeadingText>Marketplace</HeadingText>
          <ShopText>Shop local and be rewarded</ShopText>
          <ButtonContianer>
            <SignUpButtonContainer>
            <CustomButton
              onPress={() => {
                this.setModalVisible(true,'Sign Up');
              }}
              fill={Theme.colors.lightBlue}
              width="310"
              text="Create new account"
              />
            </SignUpButtonContainer>
            <LoginButtonContainer>
            <CustomButton
              onPress={() => {
                this.setModalVisible(true,'Log In');
              }}
              fill={Theme.colors.lightBlue}
              width="310"
              text="Login"
              />
            </LoginButtonContainer>
          </ButtonContianer>
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
            <IconContainer onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
              <CustomIcon
                name="cross"
                fill='#000000'
                height="15"
                width="15"
                />
            </IconContainer>
            <ScrollView>
              <Card title={this.state.modalName}>
                {
                  this.state.modalName=='Sign Up'?
                  <SignupScreen  setModalVisible={this.setModalVisible}/>
                  :this.state.modalName=='Log In'?
                    <LoginScreen setModalVisible={this.setModalVisible}/>
                  :this.state.modalName=='Recover Password'?
                    <ForgotPasswordScreen setModalVisible={this.setModalVisible} />
                  :<CreateWalletScreen navigation={this.props.navigation} setModalVisible={this.setModalVisible} />
                }
              </Card>
            </ScrollView>
          </View>
        </Modal>
        </ImageBackground>
      )
    }
  }

  export default HomeScreen;
