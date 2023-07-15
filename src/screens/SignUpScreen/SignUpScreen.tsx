import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'

export default function SignUpScreen( props : NativeStackScreenProps<any>) {
  const { navigation, route } = props
  return (
    <>
      <DefaultLayout
        title="Login" navigation={navigation} route={route}
        left={<Button title="Back" onPress={() => navigation.goBack()} />}
      >
        <View>
          <Text>Login Screen</Text>
        </View>
      </DefaultLayout>
    </>
  )
}

const styles = StyleSheet.create({})