import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import TaskScreen from '../../screens/TaskScreen/TaskScreen';
import Home from '../Home/Home';

const Drawer = createDrawerNavigator();
export default function Login() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={TaskScreen} />
      <Drawer.Screen name="Privacy Policy" component={HomeScreen} />
      <Drawer.Screen name="Terms & Conditions" component={HomeScreen} />
      <Drawer.Screen name="Log out" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})