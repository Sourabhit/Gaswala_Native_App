import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'space-evenly',
        }}>
        <Icon name="list-ul" size={20} color={'green'} />
        <Image
          style={{
            height: 20,
            width: 20,
            alignSelf: 'center',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
          source={require('../assets/logo.jpeg')}
        />
        <Text style={{color: 'green', fontSize: 16, flex: 1}}>Gaswale</Text>
        <Icon name="bell-o" size={20} color={'green'} />
        <Icon
          name="shopping-cart"
          size={20}
          color={'green'}
          marginHorizontal={10}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <Text>Payment Screen</Text>
    </View>
  );
};

export default Payment;
