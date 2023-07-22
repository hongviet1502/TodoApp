import { FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Task } from '../../Models/Task'
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message'
import { taskService } from '../../services/TaskService'
export default function AddNewTaskScreen(props: NativeStackScreenProps<any>) {
    const data = [
        {
            id: 1,
            title: 'Quick Task',
            selected: true
        },
        {
            id: 2,
            title: 'Urgent',
            selected: false
        },
        {
            id: 3,
            title: 'Important',
            selected: false
        },
        {
            id: 4,
            title: 'Việt đẹp trai',
            selected: false
        }
    ]

    const { navigation, route } = props

    const [typeList, setTypeList] = React.useState(data)
    const [newTask, setNewTask] = React.useState<Task>({
        description: '',
        type: '',
        deadline: '',
    })


    const [date , setDate] = React.useState(new Date())
    const [mode, setMode] = React.useState('date')
    const [show, setShow] = React.useState(false)
    const [textDate , setTextDate] = React.useState<string>()
    /**
     * Bắt sự kiện khi thay đổi datepicker
     * @param event 
     * @param selectedDate : Ngày được chọn
     */
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setTextDate(fDate)
        setNewTask({...newTask, deadline: fDate})
    }
    /**
     * hiển thị model datepicker theo mode
     * @param mode : loại datepicker show
     */
    function showMode(mode: string) {
        setShow(true)
        setMode(mode)
    }
    /**
     * Bắt sự kiện khi chọn loại task :
     *  - Thay đổi task type
     * @param type : Loại task
     */
    function selectTaskType(type : any){
        const updateData = data.map((item) => {
            if (item.id == type.id) {
                return { ...item, selected: true }
            }
            return { ...item, selected: false }
        })
        setTypeList(updateData)
        setNewTask({...newTask, type: type.title})
    }
    
    function renderItem({ item }: any) {
        return (
            <TouchableOpacity onPress={() => selectTaskType(item)}>
                <View style={[styles.categoryItem, { backgroundColor: item.selected ? '#EEEFF0' : '#fff', borderWidth: item.selected ? 0 : 1}]}>
                    <Text style={styles.categoryItemText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    /**
     * Hàm hiển thị toast message theo type 
     * @param message : Thông báo
     * @param type : Loại thông báo
     */
    function showToast(message: string, type: string) {
        Toast.show({
            type: type,
            // text1: 'Thành công',
            text2: message,
        });
    }
    /**
     * Hàm thêm mới task
     */
    function addTask () {
        try{
            taskService.addTask(newTask)
            showToast('Add task successfully!', "success")
            navigation.navigate('TasksScreen')
        }
        catch (error) {
            showToast('Something went wrong!', "error")
            console.log(error)
        }
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
                    <TextInput placeholder="Type here ..." style={styles.input} onChangeText={text => setNewTask({...newTask, description: text})}/>
                </View>
                <View style={styles.taskType}>
                    <Text style={styles.subHeader}>Type</Text>
                    <FlatList
                        data={typeList}
                        renderItem={renderItem}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()} />
                </View>
                <View style={styles.deadlineContainer}>
                    <Text style={styles.subHeader}>
                        Deadline
                    </Text>
                    <View style = {styles.inputcontainer}>
                        <Fontisto name='date' size={24} color={'#403572'} style = {{fontSize: 16, padding :8}}
                            onPress={() => {
                                showMode('date')
                            }}
                        />
                        <TextInput placeholder="Due Date" style={styles.inputDate} value={textDate} />
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.loginButton]}
                    onPress={() => addTask()}
                >
                    <Text style={styles.buttonText}>Add the task</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        // mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}
            </View>
            <Toast />
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