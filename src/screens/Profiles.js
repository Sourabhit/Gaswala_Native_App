import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Profiles = () => {
  return (
    <View>
      <Text style={styles.iconname}> GST Number : 36AAECV8279M1ZG</Text>
      <Text style={styles.iconname}> PAN Number : AAECV829M </Text>
      <Text style={styles.iconname}> Legal Name : Sourabh jaiswal</Text>
      <Text style={styles.iconname}> Trade Name : Sourabh jaiswal</Text>
      <Text style={styles.iconname}>
        {' '}
        Billing Address : Flat No 202. IT Park Indore
      </Text>
    </View>
  );
};

export default Profiles;
const styles = StyleSheet.create({
  iconname: {
    color: '#000',
    margin: 5,
    fontSize: 15,
    fontWeight: '600',
  },
});
