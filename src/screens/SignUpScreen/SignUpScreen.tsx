import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import auth from '@react-native-firebase/auth'
export default function SignUpScreen( props : NativeStackScreenProps<any>) {
  const { navigation, route } = props
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login')
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Join the hub!</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} onChangeText={emailValue => setEmail(emailValue)} />
        <TextInput placeholder="Password" style={styles.input} onChangeText={passwordValue => setPassword(passwordValue)} />
        <TextInput placeholder="Confirm Password" style={styles.input} />
      </View>
      
      <TouchableOpacity
        style={[styles.createAccountButton]}
        onPress={signUp}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Already registered? <Text style={styles.textSignup} onPress={() => { navigation.navigate('Login') }}>Sign in!</Text></Text>
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
  createAccountButton: {
    backgroundColor: '#4681A3',
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
  text: {
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
  },
})