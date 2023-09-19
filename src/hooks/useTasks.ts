import { useContext } from 'react'
import { ContextType, TasksContext } from '../context/TasksContext'

function useTasks () {
  const { tasks, createTask, deleteTask, changeStateTask, clearTasks, error } = useContext(TasksContext) as ContextType

  return { tasks, createTask, deleteTask, changeStateTask, clearTasks, error }
}

export default useTasks
