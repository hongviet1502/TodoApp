import firestore from '@react-native-firebase/firestore'
import { Task } from '../Models/Task'

export class TaskService {
    addTask = (newTask: Task) => {
        firestore().collection('Tasks').add({
            description: newTask.description,
            type: newTask.type,
            deadline: newTask.deadline
        })
            .then(() => {
                return true
            })
            .catch((error) => {
                console.log(error);
                return false
            })
    }
    getTasks = async () => {
        const tasks: Task[] = []
        await firestore()
            .collection('Tasks')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tasks.push({
                        // id: documentSnapshot.id,
                        description: documentSnapshot.data().description,
                        type: documentSnapshot.data().type,
                        deadline: documentSnapshot.data().deadline
                    })
                });
                return tasks
            });
        console.log(tasks)
    }
}
export const taskService = new TaskService()