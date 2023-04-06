import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profiles from './Profiles';
import Address from './Address';
import Branch from './Branch';
import UserId from './UserId';

const Profile = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      keyboardDismissMode="auto"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarShowIcon: false,
        tabBarStyle: {
          // paddingVertical: 20,
          backgroundColor: '#fff',
          height: 40,
          borderBottomWidth: 0,
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          flex: 1,
          fontWeight: '600',
          fontSize: 13,
          textTransform: 'capitalize',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'green',
          borderWidth: 1,
        },
        tabBarPressColor: '#fff',
      }}>
      <Tab.Screen options={{}} name="Profile" component={Profiles} />
      <Tab.Screen name="Address" component={Address} />
      <Tab.Screen name="Branch" component={Branch} />
      <Tab.Screen name="User ID" component={UserId} />
    </Tab.Navigator>
  );
};

export default Profile;
