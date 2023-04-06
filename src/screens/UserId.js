import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import ReuseButton from '../component/ReuseButton';

const UserId = () => {
  return (
    <View>
      <ScrollView style={{marginBottom: 10}}>
        <Text style={styles.text}>Mobile*</Text>
        <TextInput
          style={{
            // borderWidth: 1,
            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 7,
            backgroundColor: '#ccc',
          }}
        />
        <Text style={styles.text}>USer ID*</Text>
        <TextInput
          style={{
            // borderWidth: 1,

            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 7,
            backgroundColor: '#ccc',
          }}
        />
        <Text style={styles.text}>Primary Email ID*</Text>
        <TextInput
          style={{
            // borderWidth: 1,

            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 7,
            backgroundColor: '#ccc',
          }}
        />
        <Text style={styles.text}>Primary Email ID**</Text>
        <TextInput
          style={{
            // borderWidth: 1,
            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 7,
            backgroundColor: '#ccc',
          }}
        />
        <ReuseButton
          title={'Edit'}
          color={'#fff'}
          backgroundColor={'#0b9e10'}
        />
      </ScrollView>
    </View>
  );
};

export default UserId;
const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
