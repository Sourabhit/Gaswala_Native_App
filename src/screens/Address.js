import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Address = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffffff',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 10,
        margin: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#000',
            margin: 8,
            fontSize: 15,
            fontWeight: '800',
            flex: 1,
          }}>
          {' '}
          Address :
        </Text>
        <Icon name="filetext1" size={18} color={'green'} margin={10} />
        <Icon name="delete" size={18} color={'red'} margin={10} />
      </View>
      <Text style={{color: '#000', marginLeft: 8}}>
        The most popular Topic Modeling algorithm is LDA, Latent Dirichlet
        AllocationThe Madhya Pradesh , INdore 452001{' '}
      </Text>
      <Text style={styles.iconname}> Shipping :</Text>
    </View>
  );
};

export default Address;
const styles = StyleSheet.create({
  iconname: {
    color: '#000',
    marginLeft: 3,
    fontSize: 15,
    fontWeight: '800',
  },
});
