import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableOpacityBase,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReuseButton from '../component/ReuseButton';

import Swiper from 'react-native-swiper';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      'https://gaswala.vensframe.com/api/customer/productlist',
      {
        method: 'POST',
      },
    );
    const data = await response.json();
    console.log(data);
    setData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
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

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 50,
              backgroundColor: 'green',
            }}>
            <TouchableOpacity
              onPress={() => setItem(!item)}
              style={styles.touch}>
              <Text
                style={{
                  // marginLeft: 10,
                  // flex: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                LPG
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Text
                style={{
                  // marginLeft: 10,
                  // flex: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                N2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Text
                style={{
                  // marginLeft: 10,
                  // flex: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Oxygen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Text
                style={{
                  // marginLeft: 10,
                  // flex: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Others
              </Text>
            </TouchableOpacity>
          </View>

          {item ? (
            <View
              style={{
                position: 'absolute',
                top: 80,
                zIndex: 1,
                margin: 15,
                width: '25%',
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: '#ffffffff',
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 5.84,
                elevation: 10,
              }}>
              <TouchableOpacity>
                <Text style={styles.slide}>HPCL</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.slide}>BPCL</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.slide}>IOCL</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.slide}>PM"S</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <ScrollView>
            <View
              style={{
                margin: 10,
                height: 250,
                width: '100%',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Swiper autoplay={true}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img9.jpeg')}
                />
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img8.jpeg')}
                />
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img7.jpeg')}
                />
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img6.jpeg')}
                />
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img5.jpeg')}
                />
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 200,
                    width: '80%',
                    alignSelf: 'center',
                    // borderRadius: 100,
                    // marginHorizontal: 10,
                  }}
                  source={require('../assets/img4.jpeg')}
                />
              </Swiper>
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
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      fontSize: 20,
                      top: 80,
                      left: 60,
                      color: '#fff',
                      zIndex: 1,
                    }}>
                    {item.capacity + 'KG'}
                  </Text>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: 150,
                      width: 150,
                      marginTop: 10,
                    }}
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
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  touch: {
    flex: 1,
  },
  slide: {
    color: 'green',
    margin: 5,
    fontSize: 14,
    fontWeight: '800',
  },
});
