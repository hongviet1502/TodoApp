import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from '../../../screens/TaskScreen/TaskScreen';
import AddNewTaskScreen from '../../../screens/AddNewTaskScreen/AddNewTaskScreen';
const Stack = createNativeStackNavigator();
export default function TaskRoute() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
      <Stack.Screen name="AddNewTaskScreen" component={AddNewTaskScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})