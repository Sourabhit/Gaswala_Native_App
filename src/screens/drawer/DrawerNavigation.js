import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNav from '../BottomNav';
import Menu from '../Menu';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const dimension = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <Menu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: dimension.width},
      }}>
      <Drawer.Screen name="BottomNav" component={BottomNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
