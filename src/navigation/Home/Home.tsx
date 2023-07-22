import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import TaskScreen from '../../screens/TaskScreen/TaskScreen';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TaskRoute from './TaskRoute/TaskRoute';

const Tab = createMaterialBottomTabNavigator();
export default function Home(props : NativeStackScreenProps<any>) {
  const { navigation, route } = props
  return (
    <Tab.Navigator
      screenOptions={({ route }) =>({
        tabBarIcon({ focused: boolean, color: string }) {
          let iconName = 'home'
          if (route.name === 'HomeScreen') {
            iconName = 'home'
          } else if (route.name === 'TasksRoute') {
            iconName = 'calendar'
          }
          return (
              <Feather name={iconName} size={24} color={'#8B97A8'} />
            )
        },    
      })}
      
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel:'',
        
      }}/>
      <Tab.Screen name="TasksRoute" component={TaskRoute} 
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})