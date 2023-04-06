import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import Products from './Products';
import Dashboard from './Dashboard';
import Payment from './Payment';
import Help from './Help';
import Profile from './Profile';

const BottomNav = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={20} color={focused ? 'green' : 'grey'} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Feather name="grid" size={20} color={focused ? 'green' : 'grey'} />
          ),
        }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="first-order"
              size={20}
              color={focused ? 'green' : 'grey'}
            />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="creditcard"
              size={20}
              color={focused ? 'green' : 'grey'}
            />
          ),
        }}
        name="Payment"
        component={Payment}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="handshake-o"
              size={20}
              color={focused ? 'green' : 'grey'}
            />
          ),
        }}
        name="Help"
        component={Help}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="user" size={20} color={focused ? 'green' : 'grey'} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
