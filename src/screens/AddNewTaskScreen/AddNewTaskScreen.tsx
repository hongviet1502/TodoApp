import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function AddNewTaskScreen(props: NativeStackScreenProps<any>) {
    const { navigation, route } = props
    const data = [
        {
            id: 1,
            title: 'Quick Task',
        },
        {
            id: 2,
            title: 'Urgent',
        },
        {
            id: 3,
            title: 'Important',
        },
        {
            id: 4,
            title: 'Việt đẹp trai',
        }
    ]

    function renderItem({ item }: any) {
        return (
            <TouchableOpacity>
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryItemText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <DefaultLayout navigation={navigation} route={route}
            left={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='chevron-left' size={24} color={'#403572'} />
                </TouchableOpacity>
            }
        >
            <View style={styles.container}>
                <Text style={styles.header}>Add new Task:</Text>
                <View style={styles.descTaskContainer}>
                    <Text style={styles.subHeader}>Describe the task</Text>
                    <TextInput placeholder="Type here ..." style={styles.input} />
                </View>
                <View style={styles.taskType}>
                    <Text style={styles.subHeader}>Type</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <View style={styles.deadlineContainer}>
                    <Text style={styles.subHeader}>
                        Deadline
                    </Text>
                    <View style = {styles.inputcontainer}>
                        <Fontisto name='date' size={24} color={'#403572'} style = {{fontSize: 16, padding :8}}/>
                        <TextInput placeholder="Due Date" style={styles.inputDate} />
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.loginButton]}
                    onPress={() => navigation.navigate('LoggedIn')}
                >
                    <Text style={styles.buttonText}>Add the task</Text>
                </TouchableOpacity>
            </View>
        </DefaultLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    header: {
        color: '#403572',
        fontFamily: 'Roboto-Regular',
        fontSize: 24,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#173147',
    },
    inputDate: {
        flex: 1
    },
    taskType: {
        marginTop: 24,
        marginBottom: 24
    },
    categoryItem: {
        width: 95,
        height: 37,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4681A3',
        opacity: 0.6782691478729248
    },
    categoryItemText: {
        color: '#4681A3',
        fontFamily: 'Inter-SemiBold',
        fontSize: 12,
        letterSpacing: -0.012
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    inputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#173147',
    },
    descTaskContainer: {
        marginTop: 30
    },
    subHeader : {
        fontSize: 12,
        color: '#173147',
        fontWeight: '500',
        lineHeight: 17,
        letterSpacing: 0.2,
        marginBottom: 12
    },
    deadlineContainer: {
        
    },
    loginButton: {
        marginTop: 43,
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
})