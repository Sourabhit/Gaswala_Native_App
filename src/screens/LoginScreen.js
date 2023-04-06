import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import ReuseButton from '../component/ReuseButton';

const LoginScreen = ({navigation}) => {
  const [emailError, setEmailError] = useState(false);

  return (
    <View
      style={{backgroundColor: '#189e4a', flex: 1, justifyContent: 'center'}}>
      <Image
        style={{
          height: 200,
          width: 200,
          alignSelf: 'center',
          borderRadius: 100,
          margin: 1,
        }}
        source={require('../assets/logo.jpeg')}
      />
      <TextInput
        value={emailError}
        onChangeText={text => setEmailError(text)}
        placeholder="Enter mobile/Custmor id"
        placeholderTextColor={'#000'}
        style={{
          borderWidth: 1,
          backgroundColor: '#fff',
          margin: 10,
          borderRadius: 10,
          borderColor: '#fff',
          fontSize: 15,
          padding: 10,
        }}
      />

      <ReuseButton
        onPress={() => navigation.navigate('OtpScreen')}
        title={'Login'}
      />
    </View>
  );
};

export default LoginScreen;
