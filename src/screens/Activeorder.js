import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activeorder = () => {
  const User = [0, 1, 2, 3, 4, 5, 6];
  return (
    <View>
      <FlatList
        data={User}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#ffffffff',
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 5.84,
              elevation: 10,
              margin: 10,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 1,
                  color: '#000',
                  margin: 3,
                  fontSize: 14,
                  fontWeight: '800',
                }}>
                {' '}
                Order : #00563838487
              </Text>
              <Text
                style={{
                  marginLeft: 30,
                  flex: 1,
                  color: 'green',
                  margin: 3,
                  fontSize: 14,
                  fontWeight: '800',
                }}>
                Completed
              </Text>
            </View>
            <Text style={styles.iconname}> Payment Mode : COD</Text>
            <Text style={styles.iconname}> Date : 30-03-2023</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  marginLeft: 8,
                }}>
                <Icon name="eye" size={18} color={'green'} marginLeft={10} />
                <Text style={styles.iconname}>View</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 8,
                }}>
                <Icon
                  name="exchange"
                  size={18}
                  color={'blue'}
                  marginLeft={10}
                />
                <Text style={styles.iconname}>Reorder</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 8,
                }}>
                <Icon
                  name="file-text"
                  size={18}
                  color={'red'}
                  marginLeft={10}
                />
                <Text style={styles.iconname}>Invoice</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 8,
                  flexDirection: 'row',
                }}>
                <Icon name="star" size={22} color={'#f2c318'} margin={3} />
                <Text
                  style={{
                    color: '#000',
                    margin: 4,
                    fontSize: 18,
                    fontWeight: '800',
                  }}>
                  0
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Activeorder;
const styles = StyleSheet.create({
  iconname: {
    color: '#000',
    margin: 3,
    fontSize: 13,
    fontWeight: '800',
  },
});
