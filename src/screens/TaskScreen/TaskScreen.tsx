import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import DefaultLayout from '../../components/templates/DefaultLayout/DefaultLayout'
import Feather from 'react-native-vector-icons/Feather'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerActions } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'; 
import { taskService } from '../../services/TaskService'
import firestore  from '@react-native-firebase/firestore'
import { Task } from '../../Models/Task'
export default function TaskScreen(props: PropsWithChildren<TaskScreenProps>) {
  // GEt tasks ở đây
  const [dataTask, setDataTask] = React.useState<Task[]>([])
  const getTasks = async () => {
    const tasks: Task[] = []
    await firestore()
        .collection('Tasks')
        .get()
        .then(querySnapshot => {
            const taskData = querySnapshot.forEach(documentSnapshot => {
                tasks.push({
                    // id: documentSnapshot.id,
                    description: documentSnapshot.data().description,
                    type: documentSnapshot.data().type,
                    deadline: documentSnapshot.data().deadline
                })
            });
            setDataTask(tasks)
            return tasks
        });
        console.log(dataTask[0])
  }
  //---------
  const { navigation, route } = props
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
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
  React.useEffect(() => {
    getTasks()
  }, []);

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
    <DefaultLayout navigation={navigation} route={route} title={'Home'}
      left={
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Feather name='menu' size={24} color={'#8B97A8'} />

        </TouchableOpacity>
      }>
      <View style={styles.container}>
        <Text style={styles.header}>To do Tasks: </Text>
        <View style={styles.taskType}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item.id.toString()} />
        </View>
        <View style={styles.taskContainer}>
          <View style={styles.taskItem}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.taskItemTitle}>Follow Oluwafisayomi.dev on Twitter.</Text>
          </View>
          <View style={styles.taskItem}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.taskItemTitle}>Learn Figma by 4pm.</Text>
          </View>
          <View style={styles.taskItem}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.taskItemTitle}>Coding at 9am.</Text>
          </View>
          <View style={styles.taskItem}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.taskItemTitle}>Watch Mr Beasts Videos.</Text>
          </View>
          <View style={styles.taskItem}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.taskItemTitle}>Define my morning routine</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: -220, right: 30 }}>
          <TouchableOpacity
            style={{
              height: 48,
              width: 48,
              borderRadius: 30,
              backgroundColor: "#4681A3",
            }}
            onPress={() => navigation.navigate('AddNewTaskScreen')}
          >
            <Text style={{ color: "white", textAlign: "center", alignItems: "center", fontSize: 33 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

    </DefaultLayout>
  )
}
interface TaskScreenProps extends NativeStackScreenProps<any> {

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
  taskType: {
    marginTop: 36,
    marginBottom: 43
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
  taskItemTitle: {
    color: '#173147',
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: '500',
    marginLeft: 10
  },
  taskContainer: {}
})