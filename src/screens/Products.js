import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {Text} from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReuseButton from '../component/ReuseButton';

const Products = ({navigation}) => {
  const [data, setData] = useState();

  const GetData = async () => {
    // setLoading(true);
    const response = await fetch(
      'https://gaswala.vensframe.com/api/customer/productlist',
      {
        method: 'POST',
      },
    );
    const data = await response.json();
    console.log(data);
    setData(data.data);
    // setLoading(false);
  };

  useEffect(() => {
    GetData();
    console.log(data);
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
        <Text
          style={{
            color: 'green',
            fontSize: 16,
            flex: 1,
            fontWeight: 'bold',
          }}>
          Gaswale
        </Text>
        <Icon name="bell-o" size={20} color={'green'} />
        <Icon
          name="shopping-cart"
          size={20}
          color={'green'}
          marginHorizontal={10}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <FlatList
        style={{
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 5.84,
          elevation: 10,
        }}
        numColumns={'2'}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 5.84,
              elevation: 10,
              margin: 15,
            }}>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                top: 70,
                left: 60,
                color: '#fff',
                zIndex: 1,
              }}>
              {item.capacity + 'KG'}
            </Text>
            <Image
              style={{resizeMode: 'contain', height: 150, width: 150}}
              source={{uri: item.url}}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>
              {item.description}
            </Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              {item.price}
            </Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              {item.actualprice}
            </Text>
            <ReuseButton
              title={'Add to cart'}
              color={'white'}
              backgroundColor={'green'}
              width={'100%'}
              margin={12}
              height={30}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Products;
const style = StyleSheet.create({
  name: {
    color: 'red',
    borderWidth: 1,
    margin: 10,
  },
});
