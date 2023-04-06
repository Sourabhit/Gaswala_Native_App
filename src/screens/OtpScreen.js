import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import ReuseButton from '../component/ReuseButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useRoute} from '@react-navigation/native';

const OtpScreen = ({navigation}) => {
  const route = useRoute();
  return (
    <View
      style={{
        backgroundColor: '#189e4a',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Image
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          borderRadius: 100,
          margin: 1,
        }}
        source={require('../assets/logo.jpeg')}
      />
      <TextInput
        placeholderTextColor={'#000'}
        style={{
          borderWidth: 1,
          backgroundColor: '#fff',
          margin: 10,
          borderRadius: 10,
          borderColor: 'white',
          fontSize: 15,
          width: '90%',
          height: 45,
        }}
      />
      <OTPInputView
        style={{width: '80%', height: 100, padding: 10}}
        pinCount={4}
        code={'1234'} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <ReuseButton
          onPress={() => navigation.navigate('DrawerNavigation')}
          width={'40%'}
          title={'Login'}
        />
        <ReuseButton
          onPress={() => navigation.navigate('DrawerNavigation')}
          width={'40%'}
          title={'Resend OTP'}
        />
      </View>
    </View>
  );
};

export default OtpScreen;
const styles = StyleSheet.create({
  underlineStyleBase: {
    backgroundColor: '#fff',
    color: '#000',
    marginHorizontal: 20,
    borderRadius: 5,
  },

  underlineStyleHighLighted: {},
});
