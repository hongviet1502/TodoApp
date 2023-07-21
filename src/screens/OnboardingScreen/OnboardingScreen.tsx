import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HEIGHT, WIDTH } from '../../config/app'

console.log(HEIGHT);

export default function OnboardingScreen(props: NativeStackScreenProps<any>) {
    const { navigation, route } = props
    return (
        <View style={styles.container}>
            <View style={{flex: 3}}>
                <Image source={require('../../../assets/images/intro.png')} style={styles.image} />
            </View>
            <View style={[styles.loginContainer, {flex: 2}]}>
                <Text style={styles.header}>Best task management app</Text>
                <Text style={styles.subHeader}>Get organized by sorting out all your tasks and boost your productivity.</Text>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                    >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.loginButton, { backgroundColor: '#4681A3', marginTop: 17 }]}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    loginContainer: {
        flex: 1,
        marginTop: -25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 48
    },
    header: {
        paddingTop: 49,
        paddingBottom: 16,
        fontSize: 22,
        letterSpacing: 0.36,
        color: '#173147',
        lineHeight: 34,
        // fontWeight: '700',
        fontFamily: 'Roboto-Bold',
    },
    subHeader: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 15,
        letterSpacing: -0.24,
        textAlign: 'center',
        color: '#8B97A8',
        lineHeight: 20,
        width: 284,
        paddingBottom: 40
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
    }
})