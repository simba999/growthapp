import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  ContentContainer,
  DetailText,
  TextInputContainer} from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';

class ForgetPasswordScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  render () {
    return(
      <View style={{flex:1}}>
        <ContentContainer>
          <DetailText>If the email entered has been registered on email will be sent</DetailText>
          <TextInputContainer>
          <TextInput
          label="Email Address"
          width="100%" />
          </TextInputContainer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              style={{marginTop:170,marginBottom:20}}
              text="Submit"/>
        </ContentContainer>
        </View>
    )
  }
}

export default ForgetPasswordScreen ;
