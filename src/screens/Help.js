import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReuseButton from '../component/ReuseButton';

const Help = () => {
  const [load, setLoad] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [subject, setSubject] = useState();
  const [comment, setComment] = useState();

  const ContactusAPI = async () => {
    console.log(name, email, mobile, subject, comment);

    setLoad(true);
    try {
      const body = new FormData();
      body.append('userid', 2);
      body.append('name', name);
      body.append('mobile', mobile);
      body.append('email', email);
      body.append('subject', subject);
      body.append('comments', comment);
      const responce = await fetch(
        'https://gaswala.vensframe.com/api/customer/contactus',
        {
          method: 'POST',
          body: body,
        },
      );
      const res = await responce.json();
      console.log('Help======================>', res);
      // if (res.success == true) {
      //   setLoad(false);
      //   ShowToast(res.message);
      //   setName('');
      //   setEmail('');
      //   setMobile('');
      //   setSubject('');
      //   setComment('');
      //   // navigation.goBack();
      // } else {
      //   setLoad(false);
      //   ShowToast(res.message);
      // }
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // ContactusAPI();
  }, []);

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
        />
      </View>
      <ScrollView style={{marginBottom: 10}}>
        <Text style={styles.text}>Name*</Text>
        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          style={{
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 10,
          }}
        />
        <Text style={styles.text}>Email*</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          style={{
            borderWidth: 1,

            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 10,
          }}
        />
        <Text style={styles.text}>Mobile No*</Text>
        <TextInput
          value={mobile}
          onChangeText={text => setMobile(text)}
          style={{
            borderWidth: 1,

            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 10,
          }}
        />
        <Text style={styles.text}>Subject*</Text>
        <TextInput
          value={subject}
          onChangeText={text => setSubject(text)}
          style={{
            borderWidth: 1,

            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 10,
          }}
        />
        <Text style={styles.text}>Comment*</Text>
        <TextInput
          value={comment}
          onChangeText={text => setComment(text)}
          style={{
            height: '10%',
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
            borderColor: '#000',
            fontSize: 15,
            padding: 10,
          }}
        />
        <ReuseButton
          title={'Send'}
          color={'#fff'}
          backgroundColor={'green'}
          onPress={ContactusAPI}
        />
      </ScrollView>
    </View>
  );
};

export default Help;
const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
