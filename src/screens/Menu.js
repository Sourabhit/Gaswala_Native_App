import {View, Text, Image} from 'react-native';
import React from 'react';
import OtpScreen from './OtpScreen';
import Profile from './Profile';

const Menu = () => {
  return (
    <View>
      <Image
        source={require('../assets/logo.jpeg')}
        style={{width: 20, height: 20, marginRight: 5}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          // color: theme.colors.primaryBlack,
        }}>
        Gaswale
      </Text>
    </View>
  );
};

export default Menu;
