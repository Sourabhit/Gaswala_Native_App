import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Activeorder from './Activeorder';
import OrderHoistory from './OrderHoistory';
import Report from './Report';
import MyPaymnet from './MyPaymnet';
import Credit from './Credit';

const Dashboard = () => {
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
        // tabBarItemStyle: {width: 200},
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
      {/* // screenOptions={{
      //   tabBarLabelStyle: {
      //     fontSize: 14,
      //     color: 'green',
      //     fontWeight: '600',
      //   },
      //   tabBarItemStyle: {width: 100},
      //   tabBarStyle: {backgroundColor: 'powderblue'},
      // }}> */}
      <Tab.Screen options={{}} name="Active Order" component={Activeorder} />
      <Tab.Screen name="Order History" component={OrderHoistory} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="My Payment" component={MyPaymnet} />
      <Tab.Screen name="Credit" component={Credit} />
    </Tab.Navigator>
  );
};

export default Dashboard;
