import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import { HEIGHT, WIDTH } from '../../config/app'

export default function LoginScreen(props: NativeStackScreenProps<any>) {
  const { navigation, route } = props
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})