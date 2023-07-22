import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import { HEIGHT, WIDTH } from '../../config/app'
import auth from '@react-native-firebase/auth'
import Toast from 'react-native-toast-message'

export default function LoginScreen(props: NativeStackScreenProps<any>) {
  const { navigation, route } = props
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  function showToast(message : string, type : string){
    Toast.show({
      type: type,
      // text1: 'Thành công',
      text2: message,
    });
  }
  function signIn(){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('LoggedIn')
      showToast('Logged in successfully!', "success")
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        showToast('Wrong password!', "error")
      }

      else if (error.code === 'auth/user-not-found') {
        showToast('User not found!', "error")
      }
      else {
        showToast('Something went wrong!', "error")
      }
      console.error(error);
    })
  }
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>Welcome back!</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} onChangeText={emailValue => setEmail(emailValue)}/>
        <TextInput placeholder="Password" style={styles.input} onChangeText={passwordValue => setPassword(passwordValue)} />
      </View>
      <TouchableOpacity
        style={[styles.loginButton]}
        onPress={signIn}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Not registered? <Text style={styles.textSignup} onPress={() => {navigation.navigate('SignUp')}}>Sign up!</Text></Text>
      <Toast />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  header: {
    color: '#173147',
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    letterSpacing: 0.36,
    lineHeight: 34,
    marginTop: 50,
    marginBottom: 36
  },
  inputContainer: {
    gap: 24,
    marginBottom: 46
  },
  input: {
    width: '100%',
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#403572',
    width: '100%',
    height: 46,
    flexShrink: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: -0.24,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 20
  },
  text : {
    textAlign: 'center',
    color: '#8B97A8',
    lineHeight: 20,
    marginTop: 36,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    letterSpacing: -0.24
  },
  textSignup: {
    color: '#403572', 
    fontWeight: '700' 
  }
})