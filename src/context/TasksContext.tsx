import React, { ReactNode, createContext, useState } from 'react'
import { TaskItemType } from '../components/TaskItem'
import { v4 as uuidv4 } from 'uuid'

export type TasksType = TaskItemType[] | []

type Props = {
  children:ReactNode
}

export type ContextType = {
  tasks:TasksType,
  createTask:(newTask:string)=>void,
  deleteTask:(idTask:string)=>void,
  changeStateTask:(idTask:string)=>void,
  clearTasks: () => void,
  error:string
}

export const TasksContext = createContext<ContextType | {}>({})

const Tasksprovider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TasksType>([])
  const [error, setError] = useState<string>('')

  function createTask (newTask: string): void {
    if (newTask === '') {
      setError('Escriba una tarea')
      return
    }

    setTasks([...tasks, {
      id: uuidv4(),
      descri: newTask,
      toDo: true
    }])
  }

  function deleteTask (idTask:string):void {
    const newValueTask = tasks.filter((task) => task.id !== idTask)
    setTasks(newValueTask)
  }

  function clearTasks (): void {
    if (tasks.length <= 0) return
    setTasks([])
  }

  function changeStateTask (idTask: string) {
    const newValueTask = tasks.map((task) => {
      if (task.id === idTask)task.toDo = !task.toDo
      return task
    })

    setTasks(newValueTask)
  }

  const contextValue:ContextType = {
    tasks,
    createTask,
    deleteTask,
    clearTasks,
    changeStateTask,
    error
  }
  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  )
}

export default Tasksprovider
