import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('LoginScreen');;
      navigation.navigate('DrawerNavigation');
    }, 2000);
  }, []);

  return (
    <View
      style={{backgroundColor: '#189e4a', flex: 1, justifyContent: 'center'}}>
      <Animatable.View animation="bounceInLeft">
        <Image
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            borderRadius: 100,
          }}
          source={require('../assets/logo.jpeg')}
        />
      </Animatable.View>
      <Text style={{textAlign: 'center'}}>Devloped by</Text>
    </View>
  );
};

export default SplashScreen;
