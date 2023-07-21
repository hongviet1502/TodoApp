import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerActions } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
export default function HomeScreen(props: PropsWithChildren<HomeScreenProps>) {
  const { navigation, route } = props
  return (
    <DefaultLayout navigation={navigation} route={route} title={'Home'}
      left={
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Feather name='menu' size={24} color={'#8B97A8'} />

        </TouchableOpacity>
      }>
      <View style={styles.container}>
        <Text style={styles.dailyTaskHeader}>Daily Tasks:</Text>
        <View style={styles.dailyTaskContainer}>
          <View style={styles.dailyTaskItem}>
            <Text style={styles.dailyTaskItemTitle}>High Priority</Text>
            <Text style={styles.dailyTaskItemNumber }>3</Text>
          </View>
          <View style={[styles.dailyTaskItem, { backgroundColor: '#FFF4F4'}]}>
            <Text style={[styles.dailyTaskItemTitle, { color: '#FF3726'}]}>Due Deadline</Text>
            <Text style={[styles.dailyTaskItemNumber, { color: '#FF3726'}]}>1</Text>
          </View>
          <View style={styles.dailyTaskItem}>
            <Text style={styles.dailyTaskItemTitle}>Quick Win</Text>
            <Text style={styles.dailyTaskItemNumber}>3</Text>
          </View>
        </View>

        <View style={styles.checkTaskContainer}>
          <Text style={styles.checkTaskHeader}>Check all my tasks</Text>
          <Text style={styles.checkTaskContent}>See all tasks and filter them by categories you have selected when creating them</Text>
        </View>
      </View>

    </DefaultLayout>
  )
}

interface HomeScreenProps extends NativeStackScreenProps<any> {

}
const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  dailyTaskHeader: {
    color: '#403572',
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
  },
  dailyTaskContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 72
  },
  dailyTaskItem: {
    width: 98,
    height: 90,
    backgroundColor: '#EEEFF0',
    borderRadius: 15,
    padding: 12
  },
  dailyTaskItemTitle: {
    color: '#4681A3',
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    marginBottom: 12
  },
  dailyTaskItemNumber: {
    color: '#4681A3',
    fontSize: 28,
    fontFamily: 'Roboto-Regular',
  },
  checkTaskContainer: {
    width: '100%',
    backgroundColor: '#EEEFF0',
    padding: 22,
    borderRadius: 15
  },
  checkTaskHeader: {
    color: '#403572',
    fontFamily: 'Roboto-SemiBold',
    fontSize: 16,
    marginBottom: 12
  },
  checkTaskContent: {
    color: '#403572',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    opacity: 0.5
  }
})